import React from "react";
import styles from "../styles/Job.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import roboto_mono from "./font";

export interface JobProps {
    title: string;
    company: string;
    duration: string;
    url: string;
    label: string;
    description: string;
    picture: string;
}

export default function Job({title, company, duration, url, label, description, picture}: JobProps) {
    return (
        <article className={styles.jobBlock}>
            <figure>
                <img src={picture} alt={company} />
            </figure>
            <article>
                <header>
                    <h3 className={roboto_mono.className}>{title}</h3>
                    <em>{company}, {duration}</em>
                </header>

                <ReactMarkdown>{description}</ReactMarkdown>

                <footer>
                    <a className={roboto_mono.className} href={url}>{label}</a>
                </footer>
            </article>
        </article>
    );
}
