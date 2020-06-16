class Persona{
    constructor(nombre, apellido, altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
    }
    saludar(){
        console.log(`Hola! soy ${this.nombre} ${this.apellido}`)
    }
    esAlto(){
        return this.altura>=1.8
    }
}
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola! soy ${this.nombre} ${this.apellido} y soy desarrollador web!`)
    }
}

var manlio= new Persona('Magnolio', 'Tejeda', 1.72)
var me= new Desarrollador('Juan Felipe', 'Calao Pérez', 1.82)