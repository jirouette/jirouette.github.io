import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "../styles/About.module.scss";

interface Props {
    description: string;
}

export default function About({description}: Props) {
    return (
        <div className={styles.about}><ReactMarkdown>{description}</ReactMarkdown></div>
    );
}
