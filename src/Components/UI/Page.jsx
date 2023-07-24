import React from "react";

const Page = ({ children, className }) => {
    return (
        <section className={`h-full w-11/12 lg:w-3/5 flex justify-start ${className}`}>
            {children}
        </section>
    )
}

export default Page