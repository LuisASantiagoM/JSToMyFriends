const employesArray = [{
    id: 1,
    name: 'marquito'
}, {
    id: 2,
    name: 'armandito'
}, {
    id: 3,
    name: 'moy6'
}];

const salariesArray = [{
    id: 1,
    salary: 30000
}, {
    id: 2,
    salary: 35000
}];

// promesas = 3 resultados --> success, fail, pending


const getEmploye = id => {
    return new Promise((resolve, reject) => {
        const employeDB = employesArray.find(employe => employe.id === id);

    if (!employeDB) {
        reject(`No existe el usuario con el id => ${id}`);// failed
    } else {
        resolve(employeDB) //resolve
        }
    });
}

//getEmploye(2).then(cachamoselUsuario => console.log(cachamoselUsuario)).catch(err => console.log(err))

/////
const getSalary = employe => {
    return new Promise((resolve, reject)=> {
        const salaryDB = salariesArray.find(salary => {
            return salary.id === employe.id;
        })
    })
   
    if (!salaryDB) {
        reject(`No se encontro un salario para el usuario ${employe.name}`);
    } else {
        resolve({
            nombre: employe.name,
            salario: salaryDB.salary,
            id: employe.id
        })
    }
}
getEmploye(2)
    .then(cachamosElUsuario => {
        getSalary(cachamosElUsuario)
            .then(resp => console.log(resp.nombre, resp.salario))
            .catch(err => console.log(err))
            })
    .catch(err => console.log(err));



