import React from "react";
import About from "./About";
import { JobProps } from "./Job";
import Pro from "./Pro";
import Perso from "./Perso";
import { ProjectProps } from "./Project";
import styles from "../styles/Section.module.scss";

interface AboutData {
    description: string;
}

interface ProData {
    jobs: Array<JobProps>;
}

interface PersoData {
    projects: Array<ProjectProps>;
}

interface Props {
    anchor: string;
    title: string;
    type: string;
    data: AboutData|ProData|PersoData;
}

export default function Section({anchor, title, type, data}: Props) {
    let child;
    switch(type) {
        case "about":
            child = <About {...data as AboutData} />
            break;
        case "pro":
            child = <Pro {...data as ProData} />
            break;
        case "perso":
            child = <Perso {...data as PersoData} />
            break;
    }

    return (
        <section className={styles.section}>
            <h2 id={anchor}>{title}</h2>
            {child}
        </section>
    )
}
