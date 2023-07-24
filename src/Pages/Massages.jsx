import React from "react";
import Header from "../Components/Common/Header";
import Card from "../Components/Common/Card";

const Massages = () => {
    return (
        <section className="h-screen w-11/12">
            <Header text="Massages" />

            {/* Massage List */}
            <section className="flex flex-wrap items-center justify-between mt-5">
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
            </section>
        </section>
    )
};

export default Massages;