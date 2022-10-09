let allusers = [
    {
        "id": 0,
        "name": "admin",
        "balance": 10,
    },
    {
        "id": 1,
        "name": "Иван Александров",
        "balance": 2,
    },
    {
        "id": 2,
        "name": "Григорий Малкевич",
        "balance": 3
    },
    {
        "id": 3,
        "name": "Бэн Афлек",
        "balance": 4
    }
]

export function set(id, value) {
    allusers[id] = value;
}

export function get(id) {
    return allusers[id];
}