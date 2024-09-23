
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


class Calculate {

    private num1: HTMLInputElement;
    private num2: HTMLInputElement;
    private result: number;

    constructor(num1: HTMLInputElement, num2: HTMLInputElement) {
        this.num1 = num1;
        this.num2 = num2;
        this.result = 0;
    }

    //Métodos
    //sumar
    calcSum() {

        this.result = parseFloat(this.num1.value) + parseFloat(this.num2.value);

    }
    //restar
    calcSubs() {

        this.result =  parseFloat(this.num1.value) - parseFloat(this.num2.value);

    }

    //multiplicar
    calcMult() {

        this.result =  parseFloat(this.num1.value) * parseFloat(this.num2.value);

    }

    //dividir
    calcDiv() {

        this.result =  parseFloat(this.num1.value) / parseFloat(this.num2.value);
    }

    //Potencia
    calcPow() {

        this.result = Math.pow( parseFloat(this.num1.value), parseFloat(this.num2.value));
    }

    //Factorial
    
    calcFact1() {
        this.result = this.calcFact(parseFloat(this.num1.value));
    }

    calcFact2() {
        this.result = this.calcFact(parseFloat(this.num2.value));
    }
    private calcFact(factNum: number) {

        if (factNum < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }

        let result = 1;
        for (let i = 2; i <= factNum; i++) {
            result *= i;
        }

        return result;
    }


    //Result

    getResult (){
        return this.result;
    }
}

//otengo los botones para manipular el DOM
const sum2 = document.getElementById("sum2") as HTMLButtonElement;
const sub2 = document.getElementById("sub2") as HTMLButtonElement;
const mult2 = document.getElementById("mult2") as HTMLButtonElement;
const div2 = document.getElementById("div2") as HTMLButtonElement;
const pow2 = document.getElementById("pow2") as HTMLButtonElement;
const facNum1_2 = document.getElementById("facNum1_2") as HTMLButtonElement;
const facNum2_2 = document.getElementById("facNum2_2") as HTMLButtonElement;


//obtengo los inputs que van a contener los dos números
const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;

//instanciar la clase y le paso los inputs a través del constructor
const calculator = new Calculate(num1,num2);

//Asigno cada función a cada botón y muestro el result
sum2.onclick = () => {calculator.calcSum(); printResult2();}
sub2.onclick = () => {calculator.calcSubs(); printResult2();}
mult2.onclick = () => {calculator.calcMult(); printResult2();}
div2.onclick = () => {calculator.calcDiv(); printResult2();}
pow2.onclick = () => {calculator.calcPow(); printResult2();}
facNum1_2.onclick = () => {calculator.calcFact1(); printResult2();}
facNum2_2.onclick = () => {calculator.calcFact2(); printResult2();}

//función de ayuda para imprimir el resultado
function printResult2(){
    document.getElementById("result2")!.innerHTML = 
    `<p>El resultado de la operación es ${calculator.getResult()}
    `;
}
