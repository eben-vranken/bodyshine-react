import React from "react";

// Components
import Banner from "../Components/UI/Banner";

// Media
import banner from "../assets/images/contact-banner.jpg"

const Contact = () => {
    return (
        <section className="h-full w-3/12 flex justify-center items-center flex-col">
            <Banner img={banner} alt="contact-banner" text="Contact" />

            <form id="contact-form" className="my-5 w-full [&>section]:my-5">
                <h1 className="text-xl text-left">Contact</h1>
                {/* Name */}
                <section>
                    <input
                        className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="user_name" name="user_name" type="text" placeholder="Naam" required />
                </section>

                {/* Email */}
                <section>
                    <input
                        className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="user_email" name="user_email" type="email" placeholder="Uw e-mailaddres" required />
                </section>

                {/* MEssage */}
                <section>
                    <textarea name="message" id="message" cols="30" rows="10"
                        className="appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Uw bericht"></textarea>
                </section>

                <button type="submit" className="rounded bg-[#2d2d30] px-5 py-2">Send Message</button>
            </form>
        </section>
    )
};

export default Contact;