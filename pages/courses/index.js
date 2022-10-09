import Link from 'next/link'

import styles from '../../styles/Courses.module.css'
export default function Course() {

    return (
        <div>
            <h1 className={styles.title}>Курсы</h1>
            <Link href='/courses/1'>
                <a className={styles.single}>
                    <h3> Основы бизнеса</h3>
                </a>
            </Link>
            <Link href="/courses/2">
                <a className={styles.single}>
                    <h3> Противодействие коррупции</h3>
                </a>
            </Link>
            <Link href='/courses/3'>
                <a className={styles.single}>
                    <h3> История Египта</h3>
                </a>
            </Link>
            <Link href="/courses/4">
                <a className={styles.single}>
                    <h3> Основы игры за пуджа</h3>
                </a>
            </Link>
        </div>
    );

}