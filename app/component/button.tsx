'use client'
import { FC } from "react"
import styles from "../page.module.css"




interface ButtonProps {
    team: boolean
}

const Button: FC<ButtonProps> = (team) => {

    return (
        <>
        <td><button className={styles.ground}><div className={team ? styles.maru : styles.batsu}></div></button></td>
        </>
    )
}

export default Button