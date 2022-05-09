
class Pokemon{
    constructor(pokeName) {
        this.pokeName = pokeName.toUpperCase();
        
    }



sayHello(){
    console.log(`Mi pokemon ${this.Pokemon} te saluda!!!`);
}

sayMessage(message){
    console.log(`Mi pokemon ${this.Pokemon} dice: ${message}`);
}
}

module.exports = new Pokemon('DEFAULT');
