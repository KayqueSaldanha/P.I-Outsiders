const fs = require('fs');
const {v4} = require('uuid');

let db = require('../database/db.json');

const writeToDB = () => {
    const json = JSON.stringify(db);
    fs.writeFileSync('src/database/db.json', json);
};

const User = {
    findAll: () => db.users,

    findById: (id) => {
        const user = db.users.find(user => user.id === id);
        return user;
    },

    create: (user) => {
        db.users.push({ id: v4(), ...user });
        writeToDB();
    }
}

module.exports = User;