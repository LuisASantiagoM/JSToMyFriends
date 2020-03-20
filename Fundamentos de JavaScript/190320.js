//2 = 2 es asignación de variables
//2 == '2' es true
//2 === '2' es false


//Ej. 1
const name = 'Luis'
console.log(`Hola, me llamo ${name}`);

//Ej 2
const name2 = 'Esteban';

//muestra el nombre mas largo

if(name.lenght > name2.length){
    console.log(`El nombre mas largo es ${name}`)
}else{
    console.log(`El nombre mas largo es ${name2}`)
}


// comparacion de nombres y dar el mas largo
if(name.length === name2.length){
    console.log('El largo de las palabras es el mismo')
}else if(name.length > name2.length) {
    console.log(`El nombre mas largo es ${name}`)
} else {
    console.log(`El nombre mas largo es ${name2}`)
}


////////////////////////////////////////


const nameToReverse = 'Kanye West'
console.log(nameToReverse.split('').reverse().join('')); 



const normalName = 'Kanye West'
const nameToArray = normalName.split('')
const nameToReverse = nameToArray.reverse()
const finalName = nameToReverse.join('')
console.log(`${normalName},
${nameToArray},
${nameToReverse},
${finalName}`)

const finalName2 = normalName.split('').reverse().join('');
console.log(`${finalName2}`)



//Sort = ordena
//sí son numeros, de menos a mayor
//si son letras, alfabeticamente
//sort es un metodo para arreglos
const nombre1 = 'Marquito', nombre2 = 'Armandito'
const nombres = [nombre1, nombre2]

console.log(nombres.sort())


const paragraph = 'Anita lava la tina dentro de su casa con su mama que le ayuda a enjuagar las cosas'
//Return how many times does the letter a appears
//Use acum variable
//split the paragraph
//use a for to run the paragraph
//use an if to compare the index and the letter


const paragraphToArray = paragraph.split('')
let acum = 0

for(let i=0; i<=paragraphToArray.length; i++){
    if(paragraphToArray[i] === 'a' || paragraphToArray[i] = 'A'){
        acum += 1;
    }
}

console.log(acum)


let phraseToCheck = 'anita lava la tina'
let phrase2Check = phraseToCheck.split('').reverse().join('')

if(phraseToCheck.replace(/ /g, "")=== phrase2Check.replace(/ /g, "")){
    console.log('Es un palindromo')
}else{
    console.log('No lo es')
}


//Usar map en lugar de for para mapear los array
const array = ['Caliente', 'Bet365', 'Codere', 'BetCris']
array.map(el => console.log(el))

console.log(array.includes('Bet365'));
