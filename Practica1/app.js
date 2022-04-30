/*process.argv.forEach((index,value)=>{
   console.log(`${index}: ${value}`);
});
const colors=['Blue', 'Yellow','Red','Green'];
console.table(colors);

const fruits={apple:15, mangos:20};
console.table(fruits);

const name=()=>console.log("Rosa");

const duration=()=>{
    console.time('name()');
    //tiempo que lleva en ejecutarse 
    name();
    console.timeEnd('name()');
}
duration();*/

/*const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

name.question("¿Cuál es su nombre? ", name => {
    console.log(`Bienvenido ${name}`);
});*/

//const operation=require('./functions.js');


const{sum,pets} = require('./functions.js');
const { edadUsuario } = require('./uno.js');

console.log(`Resultado de la suma: ${sum(5,6)}`);
console.log(`Edad : ${edadUsuario(20)}`);

pets.forEach((pet)=>{
    console.log(pet);
});



