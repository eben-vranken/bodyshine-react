import React from "react";
import Header from "./Header";


const Banner = ({ img, alt, text }) => {
    console.log(img)
    return (
        <section className={"aspect-banner rounded-2xl bg-cover flex flex-col overflow-hidden justify-center items-center relative"} >
            <img src={img} alt={alt} className="brightness-[60%] blur-[5px]" />
            <section className="absolute">
                <Header text={text} />
            </section>
        </section>
    )
}

export default Banner;