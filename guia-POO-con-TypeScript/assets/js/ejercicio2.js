/*
EJERCICIO 2
Crear una clase Calculadora que contendrá los siguientes métodos:
•Sumar
•Restar
•Multiplicar
•Dividir
•Potencia
•Factorial
*/
var Calculate = /** @class */ (function () {
    function Calculate(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.result = 0;
    }
    //Métodos
    //sumar
    Calculate.prototype.calcSum = function () {
        this.result = parseFloat(this.num1.value) + parseFloat(this.num2.value);
    };
    //restar
    Calculate.prototype.calcSubs = function () {
        this.result = parseFloat(this.num1.value) - parseFloat(this.num2.value);
    };
    //multiplicar
    Calculate.prototype.calcMult = function () {
        this.result = parseFloat(this.num1.value) * parseFloat(this.num2.value);
    };
    //dividir
    Calculate.prototype.calcDiv = function () {
        this.result = parseFloat(this.num1.value) / parseFloat(this.num2.value);
    };
    //Potencia
    Calculate.prototype.calcPow = function () {
        this.result = Math.pow(parseFloat(this.num1.value), parseFloat(this.num2.value));
    };
    //Factorial
    Calculate.prototype.calcFact1 = function () {
        this.result = this.calcFact(parseFloat(this.num1.value));
    };
    Calculate.prototype.calcFact2 = function () {
        this.result = this.calcFact(parseFloat(this.num2.value));
    };
    Calculate.prototype.calcFact = function (factNum) {
        if (factNum < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        var result = 1;
        for (var i = 2; i <= factNum; i++) {
            result *= i;
        }
        return result;
    };
    //Result
    Calculate.prototype.getResult = function () {
        return this.result;
    };
    return Calculate;
}());
//otengo los botones para manipular el DOM
var sum2 = document.getElementById("sum2");
var sub2 = document.getElementById("sub2");
var mult2 = document.getElementById("mult2");
var div2 = document.getElementById("div2");
var pow2 = document.getElementById("pow2");
var facNum1_2 = document.getElementById("facNum1_2");
var facNum2_2 = document.getElementById("facNum2_2");
//obtengo los inputs que van a contener los dos números
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
//instanciar la clase y le paso los inputs a través del constructor
var calculator = new Calculate(num1, num2);
//Asigno cada función a cada botón y muestro el result
sum2.onclick = function () { calculator.calcSum(); printResult2(); };
sub2.onclick = function () { calculator.calcSubs(); printResult2(); };
mult2.onclick = function () { calculator.calcMult(); printResult2(); };
div2.onclick = function () { calculator.calcDiv(); printResult2(); };
pow2.onclick = function () { calculator.calcPow(); printResult2(); };
facNum1_2.onclick = function () { calculator.calcFact1(); printResult2(); };
facNum2_2.onclick = function () { calculator.calcFact2(); printResult2(); };
//función de ayuda para imprimir el resultado
function printResult2() {
    document.getElementById("result2").innerHTML =
        "<p>El resultado de la operaci\u00F3n es ".concat(calculator.getResult(), "\n    ");
}
