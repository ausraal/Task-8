/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator () {
    
    this.sum = function (a,b) {
        return a+b;
    }
    this.subtraction = (a, b) =>{
        return a-b;
    }
    this.multiplication = (a, b) =>{
        return a*b;
    }
    this.division = (a, b) =>{
        return a/b;
    }
}
const myCalculations = new Calculator ();
console.log(myCalculations.sum(10, 2));
console.log(myCalculations.subtraction(10, 2));
console.log(myCalculations.multiplication(10, 2));
console.log(myCalculations.division(10, 2));