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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //•Crear un método constructor para recibir los datos.
    function Person(name, lastName, address, phone, age) {
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.age = age;
        console.log("EJERCICIO 5");
    }
    //•Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
    Person.prototype.calAge = function () {
        if (this.age >= 18) {
            console.log("Usted es mayor de edad");
        }
        else {
            console.log("Usted no es mayor de edad");
        }
    };
    return Person;
}());
//•Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.showPersonalData = function () {
        console.log("Tu información personal: " + this.name + " " + this.lastName + "\n dirección: " + this.address + "\n Teléfono: " + this.phone + "\n Edad: " + this.age + " años" + "\n tu sueldo es: " + this.sueldo);
    };
    //•En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
    Employee.prototype.setPayment = function (sueldo) {
        this.sueldo = sueldo;
    };
    Employee.prototype.printPayment = function () {
        console.log("Tu sueldo es de " + this.sueldo);
    };
    return Employee;
}(Person));
//•Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
var employee = new Employee("Claudia", "Lara", "mi casita", 700000000, 35);
employee.setPayment(1500);
employee.printPayment();
employee.calAge();
employee.showPersonalData();
