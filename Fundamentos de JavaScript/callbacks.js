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

const getEmploye = (id, callback) => {
    const employeDB = employesArray.find(employe => employe.id === id);

    if (!employeDB) {
        callback(`No existe el usuario con el id => ${id}`);
    } else {
        callback(null, employeDB)
    }
}

// {
//     empleado: 'moy6',
//     salario: 20
// }

const getSalary = (employe, callback) => {
    const salaryDB = salariesArray.find(salary => {
        return salary.id === employe.id;
    })

    if (!salaryDB) {
        callback(`No se encontro un salario para el usuario ${employe.name}`);
    } else {
        callback(null, {
            nombre: employe.name,
            salario: salaryDB.salary,
            id: employe.id
        })
    }
}

getEmploye(1, (err, userDB) => {
    if (err) {
        return console.log(err);
    }

    getSalary(userDB, (err, resp) => {
        if (err) {
            console.log(err);
        }

        // console.log(resp)
        const { nombre, salario } = resp; // => destructuracion de objetos
        console.log(`el salario del ${nombre} es ${salario}`)
    })
});
