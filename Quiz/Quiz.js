// const e = {
//     revenue: 10_000,
//     bonus: null
// }
//
// factor = 0.2;

// const bonusFormula = document.getElementById("bonusFormula").value;
// const bonusCalculation = employee =>  employee.bonus = eval(bonusFormula)
// const bonusCalcFunc = Function("employee", "return employee.bonus =" + bonusFormula);



// bonusCalculation(e);
// console.log("e.bonus: ", e.bonus);
// e.bonus = bonusCalcFunc(e);
// bonusCalcFunc(e);
// document.writeln(e.bonus === e.revenue * factor);
// console.log(e.bonus === e.revenue * factor);
// document.writeln(e.bonus);


/* -------------------------------------------------------*/

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
// console.log(res);
//
// Function.prototype.then = function (func) {
//     return val => func(this(val));
// }



// const Scheduler = () => { // Scheduler ist ein Konstruktor
//     let inProcess = false;
//     const tasks = [];
//     function process() {
//         if (inProcess) { return; }
//         if (0 === tasks.length) { return; } // guard clause
//         inProcess = true;
//         const task = tasks.pop();
//
//         new Promise( (resolve, reject) => {
//             task(resolve);
//         }). then ( () => {
//             inProcess = false;
//             process();
//         });
//     }
//     function add(task) {
//         tasks.unshift(task);
//         process();
//     }
//     return {
//         add: add,
//         addOk: task => add( ok => { task(); ok(); }) // convenience
//     }
// };
//
// let state = [0];
//
// const scheduler = Scheduler();
// scheduler.add(ok => {
//     setTimeout( _ => {
//         state.push(1);
//         ok();
//     }, 100)
// });
// scheduler.add(ok => {
//     state.push(2);
//     ok();
// });
// console.log(state);

// const str2chars = str => [...str]; // convert a string to an array of chars
// const isAlpha = char => char.match(/[a-z]/); // char is in the alphabet
//
// const palindrome = ( str ) => {
//     const arr = str2chars(str).map(letter => letter.toLowerCase());
//     const filtered = arr.filter( letter => isAlpha(letter));
//     const reversed = filtered.reduce((acc, curr) => [curr, ...acc], []);
//     if (filtered.length !== reversed.length) {
//         return false;
//     }
//
//     for (let i = 0; i < filtered.length; i++) {
//         if (filtered[i] !== reversed[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(palindrome("ABBA"));
// console.log(palindrome("Abba"));
// console.log(palindrome("A man, a plan, a canal: Panama!"));
// console.log(palindrome("Amore, Roma!"));
// console.log(palindrome("Madam, I'm Adam!"));
// console.log(palindrome("Never odd or even."));
// console.log(palindrome("Amore"));

//
// const join = (char, acc, curr,) => {
//  return acc + char + curr;
// }
// const arr = [1, 2, 3, 4].reduce(join('-'));
// console.log(arr);
// // console.log('hallo' + join('-'));


const NullSafe = x => {
    const isNullSafe = y => y && y.then;
    const maywrap    = y => { isNullSafe(y) ? isNullSafe(y) : NullSafe(y) }// if y is not NullSafe yet, make it so
    return {
        then: fn => x === null || x === undefined ? maywrap(x) : fn(x) // see(1)
    }
};

NullSafe(1).then(x => null).then(console.log);


const processEven = i => new Promise((resolve, reject) => {
    i % 2 === 0 ? resolve(i) : reject(i);
});


// processEven(4)
//     .then( it => {console.log(it); return it})
//     .then(it => processEven(it + 1))
//     .catch(err => console.log("Error:", err));


