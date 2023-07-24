import React from "react";
import Header from "../Components/Common/Header";
import Card from "../Components/Common/Card";

const Massages = () => {
    return (
        <section className="h-full w-11/12">
            <Header text="Massages" />

            <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
        </section>
    )
};

export default Massages;