
import Link from 'next/link';
import { useState } from 'react';
import Menu from "./sidePanel/Menu"

const Right = () => {

    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {
            value: "Главная",
            href: "/",
            icon: ""
        }
    ]

    return (
        <div>
            <div className="btn" onClick={() => setMenuActive(!menuActive)}>
                <span />
            </div>
            <div className="menu">
                <Menu active={menuActive} setActive={setMenuActive} items={items} />
            </div>
        </div>
    )
}

// <Menu active={menuActive} setActive={setMenuActive} header={"Какое-то дерьмо"} items={items}/>

export default Right;