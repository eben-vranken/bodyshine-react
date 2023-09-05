import React from "react";
import Header from "../Components/Common/Header";
import Card from "../Components/Common/Card";
import Page from "../Components/UI/Page";
import Banner from "../Components/Common/Banner";

// Media
import banner from "../assets/images/massages-banner.jpg"

const Massages = () => {
    return (
        <Page className="flex-col">

            <Banner img={banner} alt="contact-banner" text="Massages" />

            {/* Massage List */}
            <section className="flex flex-wrap items-center justify-between mt-5 [&>*]:mx-1 [&>*]:my-2">
                <Card title="Lomi Lomi Nui: Ontspannende Oosterse Massage" description="Hawaïaans Lomi Lomi Nui is een buitengewoon ontspannende Hawaïaanse massage, ook wel bekend als de 'massage van liefdevolle handen'. Deze techniek combineert diverse elementen met als doel diepe ontspanning, rust en algemeen welzijn te bereiken. De massage omvat HET GEHELE LICHAAM, met uitzondering van intieme gebieden. De Lomi Lomi Nui-massage wordt vooral aanbevolen bij vermoeidheid, voor mensen met een intensieve levensstijl en degenen die worstelen met concentratieproblemen. Het is een effectieve methode om spierspanning als gevolg van stress te verminderen en zenuwen te kalmeren. Het ondersteunt ook personen met depressieve toestanden, mits voorafgaandelijk overeengekomen met een arts, en helpt bij een verminderde stemming, apathie en rug-, hoofd- en andere beweging gerelateerde klachten. Dankzij het ontspannende en kalmerende effect heeft deze massage een positieve invloed op zowel de fysieke als mentale gesteldheid van de klant. Het leidt tot ontspanning van spieren en pezen, versnelt het herstel van het lichaam na zowel fysieke als mentale inspanning. Bovendien vergroot het de beweeglijkheid van gewrichten en verbetert het hun flexibiliteit, wat de algehele lichamelijke flexibiliteit bevordert.
                De effecten van Lomi Lomi Nui omvatten niet alleen het verbeteren van de bloedsomloop en lymfestroom, maar ook het ondersteunen van het ontgiftingsproces van het lichaam en het versnellen van de stofwisseling, inclusief het verbranden van lichaamsvet. De massage helpt ook bij het verwijderen van interne energetische blokkades, herstelt de harmonie tussen de ziel en het lichaam en voegt energie en kracht toe aan dagelijkse activiteiten. Contra-indicaties voor Lomi Lomi Nui-massage omvatten alleen aandoeningen zoals griep, besmettelijke ziekten, ontstekingen, verhoogde lichaamstemperatuur en aanzienlijke verzwakking van de fysieke immuniteit. We nodigen je uit om te genieten van de unieke ervaring van ontspanning en harmonie" prices={["60 minuten - 80 euro / 90 minuten - 95 euro / 120 minuten - 120 euro"]} />
                <Card title="Kobido: Oude Weg naar Schoonheid" description="Kobido is een klassieke Japanse gezichts- en decolletémassage, ook wel de 'Oude Weg naar Schoonheid' genoemd. Kobido UP is een geavanceerdere versie van deze klassieke vorm, gericht op meer liftende technieken. Deze massage wordt vaak omschreven als een niet-chirurgische facelift. Het biedt een natuurlijk alternatief voor esthetische geneeskunde en verschillende invasieve behandelingen, zoals injecties met hyaluronzuur of botox. Regelmatige Kobido-massages kunnen leiden tot een subtiele en natuurlijke verjongingseffect.
                Een Kobido-behandeling is een ware ceremonie, uitgevoerd volgens strikte richtlijnen. Het is een intensieve massage die diep doordringt in de huidstructuren en de gezichtsspieren beïnvloedt.
                Dankzij deze massage kan de gezichtscontour verbeterd worden, spierspanning verminderd worden en mimische rimpels worden gladgestreken. De massage kan ook de wangen liften, het hangen van de wangen verminderen, rimpels en groeven verminderen, zwelling verminderen en de huid rond de ogen en oogleden verbeteren. Het stimuleert de productie van collageen en elastine, die essentieel zijn voor huidspanning en jeugdigheid. Kobido ontspant en kalmeert, vermindert hoofdpijn, verlicht de stijfheid van het gezicht, verbetert het zicht en verstevigt en revitaliseert de huid.
                De effecten van de behandeling zijn al zichtbaar na de eerste sessie, maar ze zijn kortdurend. Om de behaalde resultaten te behouden, wordt regelmatige behandeling aanbevolen. Hoewel de veranderingen subtiel zijn en langzaam plaatsvinden, worden ze na verloop van tijd duidelijk. Je uitstraling krijgt rust, jeugdigheid en glans.
                Kobido-massage wordt niet aanbevolen voor personen met een verhoogde lichaamstemperatuur, ontstoken huidaandoeningen, wonden of schaafwonden, en ook niet voor personen met onbehandelde hoge bloeddruk.
                Als je andere cosmetische behandelingen ondergaat, is het belangrijk om een bepaalde pauzeperiode te handhaven voordat je een Kobido-massage krijgt:
                ● Naaldmesotherapie, zuren - 2 weken
                ● RF Microneedling, hyaluronzuur en andere vulstoffen - 3 weken
                ● Botox - 3 maanden na toediening
                ● Draadlift - 6 maanden
                De aanbevolen hoeveelheid behandelingen is een serie van 8-10 sessies, wekelijks uitgevoerd voor optimale resultaten. Om het effect te behouden, wordt aanbevolen om 1-2 behandelingen per maand te ondergaan.
                We nodigen je uit om schoonheid en harmonie te ontdekken met Kobido.
" prices={["Tot 120 minuten - 90 euro"]} />
                <Card title="Chinese Cupping Therapie: Traditionele Zuigtherapie" description="Massage met Chinese Cupping is een praktijk waarbij siliconen- of rubberen acupunctuurcups worden gebruikt. Ze worden zowel voor medische, fysiotherapeutische als lichaamsverzorgingsdoeleinden gebruikt en kunnen vaak pijn en ongemak veroorzaken. Desondanks hebben Chinese cupping cups het potentieel om effectief spierpijn, rugpijn, cellulitis en de verwijdering van toxines uit het lichaam te verlichten.
                Een sessie met Chinese cupping cups omvat meestal 6 tot 12 behandelingen, die om de paar dagen worden uitgevoerd. Al na de eerste sessie kunnen voordelen worden opgemerkt, zoals verbeterde bloedcirculatie, betere zuurstofvoorziening van de huid en verhoogde elasticiteit. Door de stimulatie van de bloedcirculatie ondersteunt de behandeling het natuurlijke ontgiftingsproces van het lichaam, waardoor de noodzaak voor strenge diëten of laxeermiddelen wordt verminderd.
                Chinese cupping cups zijn een effectief hulpmiddel voor het verlichten van spierpijn en vinden ook toepassing bij verkoudheden, waarbij ze het genezingsproces ondersteunen. Het is echter belangrijk op te merken dat het plaatsen van de cups blauwe plekken en bloeduitstortingen kan veroorzaken. Deze bijwerkingen zijn een natuurlijke reactie van het immuunsysteem en verdwijnen meestal na een paar dagen. Desondanks is het de moeite waard om tijdelijk ongemak te doorstaan voor langdurige gezondheidsvoordelen.
                Chinese cupping therapie verbetert de bloedcirculatie, helpt bij het verminderen van cellulitis en striae, en verlaagt het niveau van lichaamsvet, wat bijdraagt aan lichaamsvorming. Het is ook een effectieve manier om gespannen spieren te ontspannen en spanningen te verminderen als gevolg van een slechte houding of intensieve training. Deze therapie kan verlichting bieden bij zenuwpijn, longproblemen en circulatiestoornissen.
                In de cosmetologie helpen Chinese cupping cups niet alleen bij het verminderen van cellulitis, maar ook bij het verminderen van striae, het voeden van weefsels, het egaliseren van de huid en het modelleren van het lichaam.
                Het is echter belangrijk op te merken dat zwangere vrouwen, kinderen en oudere personen die vatbaar zijn voor blauwe plekken en bloeduitstortingen, geen Chinese cupping therapie zouden moeten ondergaan. Contra-indicaties zijn ook acne, ontstoken aderen, koorts, gevoelige en vatbare huid, menstruatie, hoge bloeddruk, hartaandoeningen, tumoren en multiple sclerose.
                We nodigen je uit om de potentie van Chinese cupping therapie te ontdekken en te genieten van de gezondheids- en verzorgingsvoordelen.
" prices={["30 minuten - 50 euro"]} />
                <Card title="Sportmassage: Ondersteuning voor Professionele Sporters en Amateurs" description="Sportmassage is een effectieve therapie die in de eerste plaats is ontwikkeld voor professionele sporters, maar ook voordelen biedt voor mensen die op amateurniveau sporten en streven naar ontwikkeling, herstel en bescherming van spieren en gewrichten.
                Het kenmerkt zich door een intensiteit die hoger ligt dan bij een klassieke massage, met het gebruik van meer dynamische en krachtigere technieken. Het heeft als doel opwarmen, het verbeteren van de bloed- en lymfecirculatie, het herstellen van spieren na training en het verlichten van spanningen. Sportmassage vermindert het risico op blessures, vermindert vermoeidheid en draagt bij aan ontspanning.
                Het belangrijkste doel van deze therapie is het voorkomen van mogelijke symptomen die kunnen optreden na intensieve training of sportieve activiteit. De eerste tekenen van lichaamsvermoeidheid zijn verzwakte spieren en verminderde concentratie, wat kan leiden tot spier- en gewrichtsblessures.
                Sportmassages helpen het lichaam in optimale conditie te houden en versnellen het herstel na regelmatige fysieke inspanning. Ze ondersteunen niet alleen het herstel, maar helpen ook overbelasting te voorkomen.
                Het is echter belangrijk op te merken dat sportmassage niet wordt aanbevolen voor mensen die geen sport beoefenen, lijden aan aandoeningen van het cardiovasculaire systeem of zwanger zijn.
                We nodigen je uit om gebruik te maken van sportmassage om je lichaam te ondersteunen bij het behalen van sportieve doelen en om een optimale conditie te behouden.
" prices={["30 minuten - 50 euro / 60 minuten - 90 euro"]} />
                <Card title="Hot Stone Massage " description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["60 minuten - 95 euro / 90 minuten - 120 euro"]} />
                <Card title="Reiki " description="Voor mensen die moe, druk bezig zijn of een actieve levensstijl leiden. Het verwarmt het gemasseerde gebied van het lichaam," prices={["60 minuten - 45 euro"]} />
            </section>
        </Page>
    )
};

export default Massages;