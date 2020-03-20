/*
const Luisito = {
    //llave - valor
    name: 'Luis',
    age: 20,
    sabeProgramar: true
}

//destructuracion de objetos 
const {name, age} = Luisito;

//Template Strings
console.log(`Hola, me llamo ${name} y mi edad es ${age}`);
*/

//FUNCIONES
//JS Vanilla -> Ya no sirve
function suma(num1, num2){
    return num1 + num2; //cuando el compilador ve un return el codigo se para
}

//arrowFunction =>
//ES6
const suma2 = (num1, num2) => {
    return `El resultado de la suma es ${num1 + num2}`;
}
console.log(suma2(2,5));


