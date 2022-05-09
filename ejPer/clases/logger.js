class Cancion {
    constructor(nombre, duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
    }

    añadirAFav(){
        console.log('Se añadio a favoritos');
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

const CancionA = new Cancion('Aqui todo esta bien', 3.02);

console.log(CancionA);
