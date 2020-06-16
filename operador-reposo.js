const obj={
    name: 'Juan',
    contry: 'CO',
    age: 21
}

let {name, ...todo}=obj
console.log(todo)