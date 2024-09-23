
/*
EJERCICIO 3
Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
•Crear un constructor que reciba como parámetros el título y género de la canción.
•Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
•Crea un método para mostrar los datos de la canción.
*/

class Song {
    title: HTMLInputElement;
    gen: HTMLInputElement;
    private author: HTMLInputElement;

    constructor(title: HTMLInputElement, gen: HTMLInputElement) {
        this.title = title;
        this.gen = gen;
    }

    setAuthor(author: HTMLInputElement) {
        this.author = author;
    }

    getAuthor() {
        console.log(this.author.value);
        return this.author;
    }

    getDetails(){
        console.log(this.title.value, this.gen.value);
        
    }

}

//otengo los botones para manipular el DOM
const show3 = document.getElementById("show3") as HTMLButtonElement;



//obtengo los inputs que van a contener los dos datos
const title3 = document.getElementById("title3") as HTMLInputElement;
const gen3 = document.getElementById("gen3") as HTMLInputElement;
const author3 = document.getElementById("author3") as HTMLInputElement;

//instanciar la clase y le paso los inputs a través del constructor
const song = new Song(title3, gen3,);

//Asigno cada función a cada botón y muestro el result
show3.onclick = () => {
    song.setAuthor(author3);
    song.getAuthor();
    song.getDetails();
    printResult3();
}


//función de ayuda para imprimir el resultado
function printResult3() {
    document.getElementById("result3")!.innerHTML =
        `<p>Todo se imprimió en consola</p>
    `;
}
