import React from "react";
import styles from "../styles/Title.module.scss";

interface Props {
    name: string;
    title: string;
}

export default function Title({name, title}: Props) {
    return (
        <div className={styles.title}>
            <div><img src="avatar.png" alt={name} /></div>
            <h1>{name}</h1>
            <em>{title}</em>
        </div>
    )
}
