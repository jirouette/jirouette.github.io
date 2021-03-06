import React from "react";
import styles from "../styles/Project.module.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import roboto_mono from "./font";

interface Link {
    url: string;
    label: string;
}

interface ImageData {
    url: string;
    alt: string;
}

interface IframeData {
    url: string;
}

interface TextData {
    text: string;
}

interface EmbedData {
    type: string;
    data: ImageData|IframeData|TextData;
}

export interface ProjectProps {
    title: string;
    links: Array<Link>;
    description: string;
    embed: EmbedData;
}

function Image({ url, alt }: ImageData) {
    return <img src={url} alt={alt} />;
}

function Iframe({ url }: IframeData) {
    return <div className={styles.iframe}><iframe src={url} /></div>;
}

function Text({ text }: TextData) {
    return <figcaption>{text}</figcaption>;
}

export default function Project({title, links, description, embed}: ProjectProps) {
    let embedChild;
    switch(embed.type) {
        case "picture":
            embedChild = <Image {...embed.data as ImageData} />;
            break;
        case "iframe":
            embedChild = <Iframe {...embed.data as IframeData} />;
            break;
        case "text":
            embedChild = <Text {...embed.data as TextData} />;
    }

    return (
        <article className={styles.projectBlock}>
            <figure>{embedChild}</figure>
            <article>
                <header>
                    <h3 className={roboto_mono.className}>{title}</h3>
                </header>

                <ReactMarkdown>{description}</ReactMarkdown>

                <footer>
                    <menu className={roboto_mono.className}>
                        {links.map((link, _) => {
                            return <li key={link.label}><a href={link.url}>{link.label}</a></li>
                        })}
                    </menu>
                </footer>
            </article>
        </article>
    );
}
