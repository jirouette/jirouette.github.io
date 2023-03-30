import React from "react";
import Job, { JobProps } from "./Job";

interface Props {
    jobs: Array<JobProps>;
}

export default function Pro({jobs}: Props) {
    return (
        <>
            {jobs.map((job, _) => {
                return <Job key={job.title} {...job} />
            })}
        </>
    )
}
