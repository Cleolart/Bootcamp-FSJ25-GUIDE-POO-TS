/*
EJERCICIO 5
Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
•Crear un método constructor para recibir los datos.
•Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
•Crea un método para mostrar todos los datos personales (será el método abstracto).
•Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
•En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
•La clase Empleado va heredar de la clase Persona.
•Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/

 abstract class Person { //La clase abstracta solo me sirve para heredar no la puedo instanciar
    name:string;
    lastName:string;
    address:string;
    phone:number;
    age:number;

    //•Crear un método constructor para recibir los datos.
    constructor(name:string, lastName:string, address:string, phone:number, age:number){
        this.name= name;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.age = age;
        
        console.log("EJERCICIO 5");

    }

    //•Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.

    calAge(){

        if (this.age >= 18){
            console.log("Usted es mayor de edad");
            
        } else{
            console.log("Usted no es mayor de edad");
            
        }

    }
 //•Crea un método para mostrar todos los datos personales (será el método abstracto).
    abstract showPersonalData():void;

}

//•Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.

class Employee extends Person{
    showPersonalData() {
        console.log("Tu información personal: " + this.name + " "+ this.lastName + "\n dirección: " + this.address + "\n Teléfono: " + this.phone + "\n Edad: " + this.age + " años" + "\n tu sueldo es: " + this.sueldo);
    }

    sueldo:number;

    //•En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.

    setPayment (sueldo:number){
        this.sueldo = sueldo;
    }

    printPayment (){
        console.log("Tu sueldo es de " + this.sueldo);
        
    }

}

//•Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.

const employee = new Employee("Claudia", "Lara","mi casita",700000000, 35);

employee.setPayment(1500);
employee.printPayment();
employee.calAge();
employee.showPersonalData();