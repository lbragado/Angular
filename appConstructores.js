"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scott Lang");
console.log(antman);
