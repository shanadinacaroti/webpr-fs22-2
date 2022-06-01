// const e = {
//     revenue: 10_000,
//     bonus: null
// }
//
// factor = 0.2;
//
// const bonusFormula = document.getElementById("bonusFormula").value;
// const bonusCalculation = employee =>  employee.bonus = eval(bonusFormula)
// const bonusCalcFunc = Function("employee", "return " + bonusFormula);



// bonusCalculation(e);
// console.log("e.bonus: ", e.bonus);
//e.bonus = bonusCalcFunc(e);
//document.writeln(e.bonus === e.revenue * factor);

// Array.prototype.eq = function (arr) {
//     if (this.length !== arr.length) {
//         return false;
//     }
//
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] !== arr[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log([1, 2, 3].eq([1, 2, 3]));

// const inc    = y => y + 1;
// const double = x => x * 2;
//
// Number.prototype.test = function (num) {
//     return this + num;
// }
// const res = (11).test(5);
// // console.log(res);
//
// Function.prototype.then = function (func) {
//     return val => func(this(val));
// }




// const NullSafe = x => {
//     const isNullSafe = y => y && y.then;
//     const maywrap    = y => ___ ; // if y is not NullSafe yet, make it so
//     return {
//         then: fn => {
//             if (!isNullSafe(x) || x !== undefined) fn(x); else maywrap(x);} // see(1)
//     }
// };

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

let state = [0];

const scheduler = Scheduler();
scheduler.add(ok => {
    setTimeout( _ => {
        state.push(1);
        ok();
    }, 100)
});
scheduler.add(ok => {
    state.push(2);
    ok();
});
console.log(state);















