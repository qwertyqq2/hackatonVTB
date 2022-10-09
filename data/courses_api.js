const fs = require('fs');


export function getCoursesRepo(pathCourses) {
    //let courses = JSON.parse(fs.readFileSync("./courses.json"));
    let courses = require("./courses.json")
    const coursesRepo = {
        getAll: () => courses,
        getById: id => courses.find(x => x.id.toString() === id.toString()),
        find: x => courses.find(x),
        create,
        update,
        delete: _delete,
        save: () => saveData(pathCourses)
    }
    return coursesRepo;
}

function create(course) {
    // generate new user id
    course.id = courses.length ? Math.max(...courses.map(x => x.id)) + 1 : 1;

    // set date created and updated
    course.dateCreated = new Date().toISOString();
    course.dateUpdated = new Date().toISOString();

    // add and save user
    courses.push(course);
    saveData();
}

function update(id, params) {
    const course = courses.find(x => x.id.toString() === id.toString());

    // set date updated
    course.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(course, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    courses = courses.filter(x => x.id.toString() !== id.toString());
    saveData();

}

// private helper functions

function saveData(path) {
    fs.writeFileSync("./courses.json", JSON.stringify(courses, null, 4));
}

