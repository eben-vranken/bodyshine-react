import React from "react";
import Header from "../Components/Common/Header";
import Card from "../Components/Common/Card";
import Page from "../Components/UI/Page";
import Banner from "../Components/Common/Banner";

// Media
import banner from "../assets/images/massages-banner.jpg"

const Massages = () => {
    return (
        <Page className="w-full">

            <Banner img={banner} alt="contact-banner" text="Massages" />

            {/* Massage List */}
            <section className="flex flex-wrap items-center justify-between mt-5 [&>*]:mx-1 [&>*]:my-2">
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
                <Card title="Klassieke Massage" description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["30min -- 50€", "60min -- 90€"]} />
            </section>
        </Page>
    )
};

export default Massages;