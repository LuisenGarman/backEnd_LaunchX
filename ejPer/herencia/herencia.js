class Persona{
    constructor(nombre, edad, mujer, direccion) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.mujer = mujer;
        this.direccion = direccion;
    }

    saludar(){
        console.log("Hola...!");
    }

    presentarme(){
        console.log(`Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Alumno extends Persona{
    constructor(nombre, edad, mujer, direccion, matricula, carrera) {
        super(nombre, edad, mujer, direccion);
        this.matricula = matricula;
        this.carrera = carrera;
    }
}

class Maestro extends Persona{
    constructor(nombre, edad, mujer, direccion, materias) {
        super(nombre, edad, mujer, direccion);
        this.materias = materias;
    }
}

const maestro = new Maestro('Diego', 20, false, 'XXXXXXXXX', ['matemáticas', 'Física', 'Química']);
const alumno = new Alumno('Aidee', 14, true, 'YYYYYYYYYY', '798465312', 'Biologa');

alumno.presentarme()