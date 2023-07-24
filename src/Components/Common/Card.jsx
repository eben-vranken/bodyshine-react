import React from "react";

const Card = ({ title, description, prices }) => {
    return (
        <section className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Image */}
            <img className="w-full brightness-75" src="https://img.freepik.com/premium-photo/young-man-having-massage_52137-11200.jpg" />
            <section className="px-6 py-4">
                {/* Information */}
                <h1 className="font-bold text-xl mb-2">{title}</h1>
                <p className="text-gray-300 text-base">
                    {description}
                </p>

                {/* Prices */}
                <section className="pt-4 pb-2 space-x-5">
                    {prices.map(price => {
                        return (
                            <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold">{price}</span>
                        )
                    })}
                </section>
            </section>
        </section>
    )
}

export default Card;