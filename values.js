var sacha={
    nombre: "sacha",
    edad: 28,
    altura:1.72
}
var dario={
    nombre: "Darío",
    edad: 17,
    altura: 1.8
}
var juan={
    nombre: "juan",
    edad: 32,
    altura: 1.65
}
var pedro={
    nombre: "Pedro",
    edad: 28,
    altura: 1.72
}
var alejandro={
    nombre: "Alejandro",
    edad: 15,
    altura: 1.83
}
var manlio={
    nombre: "Manlio",
    edad: 17,
    altura: 1.75
}
const mayoriaDeEdad=18;
function printNameAndAge({nombre, edad}){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años!`)
}

const personas=[sacha, juan, pedro,alejandro,manlio,dario]
const esMayorDeEdad =({edad})=> edad>=mayoriaDeEdad
const esAlta= ({ altura })=> altura >= 1.8

var personasAltas= personas.filter(esAlta)
var personasBajas= personas.filter(({ altura })=> altura < 1.8)
function escribirMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
const access= persona=>{
    if(!esMayorDeEdad(persona)){
        console.log(`${persona.nombre} tiene el ACCESO DENEGADO!`)
    }

}

/* printNameAndAge(sacha)
printNameAndAge(dario) */
