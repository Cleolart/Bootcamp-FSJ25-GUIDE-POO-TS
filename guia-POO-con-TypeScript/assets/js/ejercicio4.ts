/*
EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Página 2 de 2
ACADEMIA DE TECNOLOGÍA CREATIVA
KODIGO
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:

•Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
•Define un objeto de la clase Cuenta y llama sus métodos.
*/

class Account {
    name: string;
    balance: number;
    accountType: string;
    accountNumber: number;

    //•Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
    constructor(name: string, balance: number, accountType: string, accountNumber: number) {

        this.name = name;
        this.balance = balance;
        this.accountType = accountType;
        this.accountNumber = accountNumber;

        console.log("EJERCICIO 4");
        

    }

    //•Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
    desposit(amount: number) {

        if (amount < 5) {
            console.log("el valor a depositar debe ser mayor a $5.00");

        } else {
            console.log("se ha depositado correctamente" + amount);
            this.balance += amount;
        }

    }

    /*•Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
    Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.*/
    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Tienes disponible: " + this.balance + ". No tenés fondos suficientes fondos para retirar: " + amount);
        } else {
            this.balance -= amount;
            console.log("Haz retirado " + amount + ", queda disponible " + this.balance);
            
        }
    }

    //•Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.

    customerData(){
        console.log("Nombre: " + this.name + ", tipo de cuenta: " + this.accountType + ", número de cuenta: " + this.accountNumber);
        
    }

}


const account = new Account("Claudia",580, "Ahorro", 123456);

account.withdraw(600);
account.desposit(150);
account.withdraw(58);
account.customerData();
