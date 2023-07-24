import React from "react";


const Banner = ({ img, alt, text }) => {
    console.log(img)
    return (
        <section className={"aspect-banner rounded-2xl bg-cover flex flex-col overflow-hidden justify-center items-center relative"} >
            <img src={img} alt={alt} className="brightness-[60%] blur-[5px]" />
            <h1 className="absolute text-4xl font-bold leading-none">{text}</h1>
        </section>
    )
}

export default Banner;