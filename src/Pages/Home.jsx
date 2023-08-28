import React from "react";
import Header from "../Components/Common/Header";
import Page from "../Components/UI/Page";

const Home = () => {
    // Replace these with your actual information
    const name = "Dubiela Ewa";
    const aboutMe = "Indien je vermoeid, overwerkt, gehaast of overbelast bent door verplichtingen, en je worstelt met gespannen spieren, zwellingen, cellulitis of pijn in de rug, nek en benen, dan ben je hier aan het juiste adres. Ik bied je de mogelijkheid tot natuurlijke ontspanning, het verlichten van spierspanning en verlichting van klachten. Ik nodig je uit om kennis te maken met onze aanbiedingen en de beschrijvingen van verschillende soorten massages. Mijn ervaring is gebaseerd op talrijke cursussen waarvoor ik certificaten heb behaald, evenals internationale certificaten van de World Massage Federation en de International Alternative Medicine Association, en certificaten van het Ministerie van Onderwijs, die me in staat stellen om mijn beroep zowel in eigen land als in het buitenland uit te oefenen. Mijn werk is mijn passie en masseren is niet alleen een beroep, maar ook een manier om een glimlach op het gezicht van mijn klanten te toveren. Het is voor mij onschatbaar om het tevreden gevoel te zien dat ze ervaren na een massage. Mijn prioriteit is om zoveel mogelijk mensen te helpen en verlichting te bieden. Je bent van harte welkom om gebruik te maken van mijn diensten, zowel in mijn praktijk als in samenwerking met Beauty Salon Patinail (alle informatie beschikbaar op de website https://www.beautysalonpatinail.be/), waar ik op vrijdag en zaterdag werk van 15:00 tot 20:00 uur en op zondag van 10:00 tot 15:00 uur. Op andere tijdstippen ben ik ook beschikbaar voor klantenbezoeken.";
    // Replace "your_image_url" with the URL of your picture
    const imageUrl = "your_image_url";

    return (
        <Page className="flex-col">
            <Header text="Home" />
            <section className="w-32 h-32 border border-white rounded-full overflow-hidden flex justify-center items-center">
                <img src="" alt="test" />
                
            </section>
            <h1>{name}</h1>
            <p>{aboutMe}</p>
        </Page>
    );
};

export default Home;
