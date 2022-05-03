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

// console.log(inc.then(double).then(double)(1) === 8); // returns true
//
// function Todo(text) {
//     let done = false;
//     const check = () => this.done = true;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check: check
//     }
// }
//
// let todo = Todo("buy milk");
// todo.check();
// console.log("todo",todo.isDone());


// function Todo2(text) {
//     let done = false;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check: done = true
//     }
// }
//
// let todo2 = Todo2("buy milk");
// todo2.check(); // error: not a function!
// document.writeln(todo2.isDone());


// function Todo3(text, done) {
//     const check = () => done = true;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check: check
//     }
// }
//
// let todo3 = Todo3("buy milk", false);
// todo3.check();
// console.log("todo3",todo3.isDone());
//
//
// function Todo4(text, done) {
//     function check() { done = true}
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check: check
//     }
// }
//
// let todo4 = Todo4("buy milk", false);
// todo4.check();
// console.log("todo4", todo4.isDone());
//
//
// function Todo5(text) {
//     const done = false;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         //check:   () => done = true // assignment to a constant variable (ansonsten true)
//     }
// }
//
// let todo5 = Todo5("buy milk");
// // todo5.check();
// console.log("todo5", todo5.isDone());
//
//
// function Todo6(text) {
//     let done = false;
//     const check = () => done = true;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check: check
//     }
// }
//
// let todo6 = Todo6("buy milk");
// todo6.check();
// console.log("todo6", todo6.isDone());
//
//
// function Todo7(text) {
//     let done = false;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check:   () => done = true
//     }
// }
//
// let todo7 = Todo7("buy milk");
// todo7.check();
// console.log("todo7", todo7.isDone());
//
//
//
// function Todo8(text) {
//     let done = false;
//     const check = () => done = true;
//     return {
//         getText: () => text,
//         isDone:  () => done,
//         check:   check
//     }
// }
//
// let todo8 = Todo8("buy milk");
// todo8.check();
// console.log("todo8", todo8.isDone());

/*
function handle_1(callback) {
    const result = [];
    callback(result);
    callback(result);
    return result;
}
console.log("handle_1", handle_1(it => it.push(1)).length === 2);


function handle_2(callback) {
    const result = [];
    return callback(result);
}
console.log("handle_2", handle_2(() => [1]).length === 1);


function handle_3(count, callback) {
    const result = [];
    for (let i=0; i < count; i++) {
        callback(result);
    }
    return result;
}
console.log("handle_3", handle_3( 3,it => it.push(1)).length === 3);


function handle_4(callback) {
    return callback( [] );
}
console.log("handle_4", handle_4(it => { it.push(1); return it; }).length === 1);


function handle_5(callback) {
    const result =  [];
    callback(result);
    return result;
}

let it = [];
console.log("handle_5", handle_5(() => it.push(1)).length === 1);


// function handle_6(callback) {
//     const result =  [];
//     callback(result);
//     return result;
// }
// console.log("handle_6", handle_6( it.push(1)).length === 1);


// function handle_7(callback) {
//     const result = [];
//     callback(result);
//     return result;
// }
//
// let it_7 = [];
// console.log("handle_7", handle_7(it_7.push(1)).length === 1);


function handle_8(callback) {
    const result = [];
    callback(result);
    return result;
}
console.log("handle_8", handle_8(it => it.push(1)).length === 1);


function handle_9(callback) {
    const result = [];
    callback( [] );
    return result;
}
console.log("handle_9", handle_9(it => it.push(1)).length === 1);


function handle_10(callback) {
    const result = [];
    callback(result);
    return result;
}

let it_10 = [];
console.log("handle_10", handle_10( it_10 => it_10.push(1)).length === 1);


function handle_11(callback) {
    const result = [];
    callback(result);
    return result;
}
console.log("handle_11", handle_11(() => it.push(1)).length === 1);


function handle_12(callback) {
    const result = [];
    callback(result);
    return result;
}
console.log("handle_12", handle_12(it => it.push(1)).length === 1);

*/


// Q18a
const failSafe = defVal => callback => arg => {
    try {
        return callback(arg);
    } catch (e) {
        //console.log(e);
        return defVal;
    }
}

const doError = x => { throw new Error()}
const errorCount = failSafe(77)(doError);

console.log("error:", errorCount(null));
console.log("failSafe(false)(x=>x)(true):", failSafe(false)(x=>x)(true));
console.log()
