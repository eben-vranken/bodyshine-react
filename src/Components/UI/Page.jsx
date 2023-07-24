import React from "react";

const Page = ({ children }) => {
    return (
        <section className="h-full w-11/12 lg:w-3/5 flex flex-col justify-start">
            {children}
        </section>
    )
}

export default Page