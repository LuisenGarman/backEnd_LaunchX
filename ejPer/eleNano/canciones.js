function Cancion(nombre, duracion){
    this.nombre = nombre;
    this.duracion = duracion;
    this.añadirAFav = () => {
        console.log("Añadir a favoritos");
    }
}

module.exports = new Cancion('DEFAULT');