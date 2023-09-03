// el infierno de los callback o llamar uno callback dentro de otro...
// definimos un arreflo de tres elementos:
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

// creamos otro arreglo de salarios de solo dos elementos.
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
    
        id: 2,
        salario: 1500
    }
];
    
//getEmpleado transformado en promesa, ya no es necesario el callback.
// se define la promesa con dos argumentos resolve si no hay error, reject si hay error
//se busca el empleado retorna el nombre si existe llamo al empleado, caso contrario el error
// const getEmpleado = (id) => {
//     const promesa = new Promise((resolve, reject) => {
//         const empleado = empleados.find(e => e.id === id)?.nombre
//         if(empleado){
//             resolve(empleado)
//         }
//         else {
//             reject (`No existe Empleado co Id ${id}`)
//         }
//     });
//     return promesa;
// }

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
        ? resolve(empleado)
        :reject (`No existe Empleado co Id ${id}`);
    });
}

// funcion getSalario
const getSalario = (id) => {
    return new  Promise((resolve, reject) => {
        const salario= salarios.find(s => s.id === id)?.salario;
        (salario)
        ? resolve(salario)
        :reject (`No existe Empleado con Salario Id ${id}`);
    });
}

// const id = 3;
// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch(err => console.log(err));

// // llamada a funcion salario
// getSalario(id)
// .then(salario => console.log(salario))
// .catch(err => console.log(err));

const id = 2;
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log('El empleado: ',nombre, 'tiene un Salario de: ',salario))
.catch(err => console.log(err));