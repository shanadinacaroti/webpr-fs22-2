
// execute asynchronous tasks in strict sequence, aka "reactive stream", "flux architecture"
const Scheduler = () => { // Scheduler ist ein Konstruktor
    let inProcess = false;
    const tasks = [];
    function process() {
        if (inProcess) { return; }
        if (0 === tasks.length) { return; } // guard clause
        inProcess = true;
        const task = tasks.pop();

        new Promise( (resolve, reject) => {
            task(resolve);
        }). then ( () => {
            inProcess = false;
            process();
        });
    }
    function add(task) {
        tasks.unshift(task);
        process();
    }
    return {
        add: add,
        addOk: task => add( ok => { task(); ok(); }) // convenience
    }
};


// a dataflow abstraction that is not based on concurrency but on laziness

const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value // return ist eine Funktion ohne Parameter
                 ? value = howto() // Ausdruck evaluiert zu neuen Wert und wird zurückgegeben
                 : value;
};

