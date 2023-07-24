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
            <div className="flex mt-8">
                <div className="relative flex-shrink-0">
                    <div className="w-48 h-48 rounded-full overflow-hidden border border-gray-400">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="ml-8">
                    <h1 className="text-2xl font-bold mb-4">{name}</h1>
                    <p className="text-lg">{aboutMe}</p>
                </div>
            </div>
        </Page>
    );
};

export default Home;
