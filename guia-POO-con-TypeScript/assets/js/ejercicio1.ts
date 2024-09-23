
/*
EJERCICIO 1
Crear una clase Cabecera Pagina, que contenga 3 métodos,
el primer método que obtenga el título, color y fuente de la página,
el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda
y el tercer método que imprima todas las propiedades.
*/
class Header1 {

    private title: string;
    private color: string;
    private font: string;
    private alignment: string;
    private titleDOM:HTMLElement;

    constructor(htmlId:string){

        this.titleDOM = document.getElementById(htmlId)!;
    }

    //first method
    getTextFormat(showAlert:boolean = true): void {

        this.title = this.titleDOM?.textContent ?? "";
        this.color = window.getComputedStyle(this.titleDOM!).color?? "";
        this.font = window.getComputedStyle(this.titleDOM!).font?? "";

        if (showAlert){

            alert(`El título es: ${this.title} \n El color es: ${this.color} \n La fuente es: ${this.font}`);

        }
    }

    //second method

    setAligment(alignment:string):void{
        this.titleDOM.style.textAlign = alignment;
        this.alignment=alignment;
    }

    //3° method

    printAll(){

        this.getTextFormat(false);

        alert(`El título es: ${this.title} \n El color es: ${this.color} \n La fuente es: ${this.font} \n La alineación es ${this.alignment}`);
    }

}

const header = new Header1("font1");

const method1 = document.getElementById("method1") as HTMLButtonElement;

method1.onclick = () => header.getTextFormat();

const alignLeft = document.getElementById("alignLeft") as HTMLButtonElement;
const alignRight = document.getElementById("alignRight") as HTMLButtonElement;
const alignCenter = document.getElementById("alignCenter") as HTMLButtonElement;

alignLeft.onclick = () => header.setAligment("left");
alignRight.onclick = () => header.setAligment("Right");
alignCenter.onclick = () => header.setAligment("Center");

const printAll1 = document.getElementById("printAll1")  as HTMLButtonElement;

printAll1.onclick = () => header.printAll();