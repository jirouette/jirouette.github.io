import React from "react";
import Project, { ProjectProps } from "./Project";

interface Props {
    projects: Array<ProjectProps>;
}

export default function Perso({projects}: Props) {
    return (
        <>
            {projects.map((project, _) => {
                return <Project key={project.title} {...project} />
            })}
        </>
    )
}
