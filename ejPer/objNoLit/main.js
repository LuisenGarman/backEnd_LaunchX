function Cancion(nombre, duracion){
    this.nombre = nombre;
    this.duracion = duracion;
    this.añadirAFav = () => {
        console.log("Añadir a favoritos");
    }
}

const cancion1 = new Cancion('Aqui todo esta bien', 3.02);
const cancion2 = new Cancion('It´s ok ', 4.05)

console.log(cancion1);
console.log(cancion2);