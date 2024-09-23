/*
EJERCICIO 3
Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
•Crear un constructor que reciba como parámetros el título y género de la canción.
•Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
•Crea un método para mostrar los datos de la canción.
*/
var Song = /** @class */ (function () {
    function Song(title, gen) {
        this.title = title;
        this.gen = gen;
    }
    Song.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Song.prototype.getAuthor = function () {
        console.log(this.author.value);
        return this.author;
    };
    Song.prototype.getDetails = function () {
        console.log(this.title.value, this.gen.value);
    };
    return Song;
}());
//otengo los botones para manipular el DOM
var show3 = document.getElementById("show3");
//obtengo los inputs que van a contener los dos datos
var title3 = document.getElementById("title3");
var gen3 = document.getElementById("gen3");
var author3 = document.getElementById("author3");
//instanciar la clase y le paso los inputs a través del constructor
var song = new Song(title3, gen3);
//Asigno cada función a cada botón y muestro el result
show3.onclick = function () {
    song.setAuthor(author3);
    song.getAuthor();
    song.getDetails();
    printResult3();
};
//función de ayuda para imprimir el resultado
function printResult3() {
    document.getElementById("result3").innerHTML =
        "<p>Todo se imprimi\u00F3 en consola</p>\n    ";
}
