/*
EJERCICIO 1
Crear una clase Cabecera Pagina, que contenga 3 métodos,
el primer método que obtenga el título, color y fuente de la página,
el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda
y el tercer método que imprima todas las propiedades.
*/
var Header1 = /** @class */ (function () {
    function Header1(htmlId) {
        this.titleDOM = document.getElementById(htmlId);
    }
    //first method
    Header1.prototype.getTextFormat = function (showAlert) {
        var _a, _b, _c, _d;
        if (showAlert === void 0) { showAlert = true; }
        this.title = (_b = (_a = this.titleDOM) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "";
        this.color = (_c = window.getComputedStyle(this.titleDOM).color) !== null && _c !== void 0 ? _c : "";
        this.font = (_d = window.getComputedStyle(this.titleDOM).font) !== null && _d !== void 0 ? _d : "";
        if (showAlert) {
            alert("El t\u00EDtulo es: ".concat(this.title, " \n El color es: ").concat(this.color, " \n La fuente es: ").concat(this.font));
        }
    };
    //second method
    Header1.prototype.setAligment = function (alignment) {
        this.titleDOM.style.textAlign = alignment;
        this.alignment = alignment;
    };
    //3° method
    Header1.prototype.printAll = function () {
        this.getTextFormat(false);
        alert("El t\u00EDtulo es: ".concat(this.title, " \n El color es: ").concat(this.color, " \n La fuente es: ").concat(this.font, " \n La alineaci\u00F3n es ").concat(this.alignment));
    };
    return Header1;
}());
var header = new Header1("font1");
var method1 = document.getElementById("method1");
method1.onclick = function () { return header.getTextFormat(); };
var alignLeft = document.getElementById("alignLeft");
var alignRight = document.getElementById("alignRight");
var alignCenter = document.getElementById("alignCenter");
alignLeft.onclick = function () { return header.setAligment("left"); };
alignRight.onclick = function () { return header.setAligment("Right"); };
alignCenter.onclick = function () { return header.setAligment("Center"); };
var printAll1 = document.getElementById("printAll1");
printAll1.onclick = function () { return header.printAll(); };
