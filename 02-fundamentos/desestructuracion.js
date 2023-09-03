//definimos un objeto
const deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre(){
        // return this.nombre+" "+ this.apellido +" "+ this.regeneracion;
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}
/*Primer caso */
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// console.log(deadpool.getNombre());
// const {apellido,nombre,poder} = deadpool; esta es la desestructuracion del objeto
// const {apellido,nombre,poder, edad = 20} = deadpool; esta es la desestructuracion del objeto
// console.log(nombre, apellido, poder, edad);

/*Segundo caso */
// function imprimeHeroe(heroe) {
//     const {apellido,nombre,poder, edad = 20} = heroe;
//     console.log(nombre, apellido, poder,edad);
// }
// imprimeHeroe(deadpool);

/*Tercer caso */
// function imprimeHeroe({apellido,nombre,poder, edad = 20}) {
//     console.log(nombre, apellido, poder,edad);
// }
// imprimeHeroe(deadpool);

/*Cuarto caso */
// function imprimeHeroe({apellido,nombre,poder, edad = 20}) {
//     nombre = 'Fernando';
//     console.log(nombre, apellido, poder,edad);
// }
// imprimeHeroe(deadpool);

const heroes = ['deadpool', 'supermam', 'batmam'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3= heroes[2];

// const [h1,h2,h3]=heroes;
// console.log(h1,h2,h3);
const [,,h3]=heroes;
console.log(h3);