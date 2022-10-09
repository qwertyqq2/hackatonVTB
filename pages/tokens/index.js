import { set, get, allusers } from "../../data/users";
import styles from "../../styles/Tokens.module.css";
import Cost from "../../Cost"
export default function Tokens() {
    const user = get(2);




    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                <img className={styles.img} src="person.png" width="500" height="300" />
            </ul>
            <p className={styles.text}>Баланс: {Cost.check()} VTBT</p>
            <p className={styles.text}>Статус: Working</p>
            <button className={styles.button}>
                <div>Обменять на Digital Ruble</div>
            </button>
        </div >
    )
}