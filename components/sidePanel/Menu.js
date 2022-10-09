import React from "react"
import User from "./User"
import Link from 'next/link'

const Menu = ({ header, items, active, setActive }) => {

    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(!active)}>
            <div className="blur" />
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header"></div>
                <User />
                {/* <ul>
                    <h3>Пройденные курсы</h3>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                            <span className="material-icons">{item.icon}</span>
                        </li>
                    )}
                </ul> */}
                {items.map(item =>
                    <Link href={item.href}>{item.value}</Link>
                )}

            </div>
        </div>
    )
}

export default Menu