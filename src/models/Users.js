const fs = require('fs');
const {v4} = require('uuid');

const db = require('../database/db.json');

// Escreve os dados em memória no arquivo db.json
// Essa é uma função que é chamada quando queremos escrever dados no arquivo JSON
const writeToDB = () => {
    // Converte o objeto db em string
    const json = JSON.stringify(db);
    // Escreve a string no arquivo db.json
    fs.writeFileSync('src/database/db.json', json);
}

const User = {
    // Retorna um usuário por um campo
    findAll: () => db.users,

    // Retorna um usuário pelo email
    findByEmail: (email) => {
        // Busca o usuário que tiver o email informado
        const user = db.users.find(user => user.email === email);
        // Retorna o usuário encontrado
        return user;
    },

    findById: (id) => {
        const user = db.users.find(user => user.id === id);
        return user;
    },

    create: (user) => {
        // Gera um id único para o usuário e adiciona ao db em memória
        db.users.push({ id: v4(), ...user });
        // Escreve os dados em memória no arquivo db.json
        writeToDB();
    },

    edit: (id, user) => {
        const userIndex = db.users.findIndex(user => user.id === id);
        const userOld = db.users[userIndex];
        db.users[userIndex] = { id, ...user, password: userOld.password, email: userOld.email, nome: userOld.nome, sobrenome: userOld.sobrenome };
        writeToDB();
    }
}

module.exports = User;