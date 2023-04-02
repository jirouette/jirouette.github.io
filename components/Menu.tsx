import React from "react";
import Title from "./Title";
import styles from "../styles/Menu.module.scss";
import roboto_mono from "./font";

interface Link {
    url: string;
    label: string;
}

interface Me {
    name: string;
    title: string;
}

interface Props {
    me: Me;
    links: Array<Link>;
    externs: Array<Link>;
}

function LinkWithEmoji({ url, label }: Link) {
    if (/^\p{Emoji}/u.test(label)) {
        return <li><a href={url} data-emoji={label.slice(0, 3)}>{label.slice(3)}</a></li>;
    }
    return <li><a href={url}>{label}</a></li>;
}

export default function Menu({me, links, externs}: Props) {
    return (
        <nav className={`${styles.menu} ${roboto_mono.className}`}>
            <Title {...me} />
            <menu className={styles.links}>
                {links.map((link, _) => {
                    return <li key={link.label}><a href={link.url}>{link.label}</a></li>;
                })}
            </menu>

            <menu className={styles.externs}>
                {externs.map((link, _) => {
                    return <LinkWithEmoji key={link.label} {...link} />;
                })}
            </menu>
        </nav>
    )
}
