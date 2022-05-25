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




const NullSafe = x => {
    const isNullSafe = y => y && y.then;
    const maywrap    = y => ___ ; // if y is not NullSafe yet, make it so
    return {
        then: fn => ___ // see(1)
    }
};

















