import { useRouter } from "next/router";
import { allusers } from "../../data/users";
import { allcourses } from "../../data/courses";
import { set, get } from "../../data/users";


import Router from 'next/router'
import styles from '../../styles/Home.module.css';
import Cost from "../../Cost"

const fs = require('browserify-fs');


function onclick(id) {
    //console.log(id)
    const price = allcourses[id - 1].value;
    const user = get(0);
    //console.log(user)
    set(0, 10)
    //console.log(get(0))

    Router.back()
}

export default function Course() {

    const router = useRouter()
    const id = router.query.id;


    const course = allcourses[id - 1];

    return (
        <div>
            <h1 className={styles.title}>{course.name}</h1>
            <p> {course.desc}</p>

            <p>Длительность: {course.duration} </p>
            <p>Сложность: {course.level}</p>
            <p>Вознаграждение: {course.value} VTBT</p>
            <button className={styles.button}>
                <div onClick={() => { onclick(id); Cost.addCost(course.value) }}>Записаться</div>
            </button>
        </div >
    );


}