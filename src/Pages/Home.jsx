import React from "react";
import Header from "../Components/Common/Header";
import Page from "../Components/UI/Page";

const Home = () => {
    // Replace these with your actual information
    const name = "Your Name";
    const aboutMe = "Write a little bit about yourself here.";
    // Replace "your_image_url" with the URL of your picture
    const imageUrl = "your_image_url";

    return (
        <Page className="flex-col">
            <Header text="Home" />
            <section className="w-32 h-32 border border-white rounded-full overflow-hidden flex justify-center items-center">
                <img src="" alt="test" />
                
            </section>
        </Page>
    );
};

export default Home;
