import React from "react";

export function Preview(props) {
    return (
        <div className="w-full h-full flex">

            <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <defs
                dangerouslySetInnerHTML={{
                __html: `
                <filter id="filter" x="0" y="0" width="100%" height="100%">

                </filter>
                `,
                }}
            />

            <g filter="url(#filter)">
                <circle cx="50" cy="50" r="50" fill="orangered" />
            </g>
            </svg>

            <svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <g>
                <circle cx="50" cy="50" r="50" fill="orangered" />
            </g>
            </svg>

        </div>
    )
}