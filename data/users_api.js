const fs = require('fs');

export function getById(id) {
    let users = require("./users.json")

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i]
        }
    }
}


export async function incBalance(id, val) {
    let users = require("./users.json")
    let i = 0
    for (i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            let user = users[i];
            user.balance += val;
            Object.assign(users[i], user);
            break;
        }
    }
    saveData(users)
}

export function create(user) {
    let users = require("./users.json")
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    users.push(user);
    saveData(users);
}

export function update(id, params) {
    let users = require("./users.json")
    let i = 0
    for (i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            Object.assign(users[i], params);
        }
    }

    saveData(users);
}



function _delete(id) {
    let users = require("./users.json")
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData(users);

}


async function saveData(users) {
    console.log("Новые")
    console.log(users)
    console.log("Старые")
    let oldusers = require("./users.json")
    console.log(oldusers)
    await fs.writeFile("./users.json", JSON.stringify(users, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
        else console.log("success");
    });

}



