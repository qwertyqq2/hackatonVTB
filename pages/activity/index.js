import styles from "../../styles/Home.module.css";
import Link from 'next/link'

export default function Activity() {
    return (
        <div>
            <h1 className={styles.title}>
                Play to earn
                <p className={styles.text}>
                    Играя зарабатывай - коцепция, позволяющая зарабытывать куш, просто играю в игру.
                </p>
                <ul>
                    <Link href="/activity/roots">
                        <a>Правила игры</a>
                    </Link>
                    <a>Играть</a>

                </ul>
            </h1>
        </div >
    )
}
