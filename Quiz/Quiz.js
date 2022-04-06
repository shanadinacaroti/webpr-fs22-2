const e = {
    revenue: 10_000,
    bonus: null
}

factor = 0.2;

const bonusFormula = document.getElementById("bonusFormula");
const bonusCalculation = emp =>  emp.bonus = eval('emp.bonus = emp.revenue * bonusFormula.value')
const bonusCalcFunc = Function("emp", "return emp.bonus = emp.revenue * bonusFormula.value");


//console.log( bonusCalcFunc(e));
//bonusCalculation(e);
bonusCalcFunc(e);
//document.writeln(bonusCalculation(e));
//document.writeln( bonusCalcFunc(e));
document.writeln(e.bonus === e.revenue * factor);


const input = document.getElementById("i");
let join = arr = symb => arr;
//input.value = [1, 2, 3].reduce((acc, curr) => curr + " " + acc );
input.value = [1, 2, 3].reduce(join('-'));