const e = {
    revenue: 10_000,
    bonus: null
}

factor = 0.2;

const bonusFormula = document.getElementById("bonusFormula").value;
const bonusCalculation = employee =>  employee.bonus = eval(bonusFormula)
const bonusCalcFunc = Function("employee", "return " + bonusFormula);



//bonusCalculation(e);
//console.log("e.bonus: ", e.bonus);
e.bonus = bonusCalcFunc(e);
document.writeln(e.bonus === e.revenue * factor);


//const input = document.getElementById("i");
//let join = arr = symb => arr;
//input.value = [1, 2, 3].reduce((acc, curr) => curr + " " + acc );
//input.value = [1, 2, 3].reduce(join('-'));
