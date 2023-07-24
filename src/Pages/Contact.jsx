import { React, useRef } from "react";
import emailjs, { send } from '@emailjs/browser';

// Components
import Banner from "../Components/Common/Banner";

// Media
import banner from "../assets/images/contact-banner.jpg"
import Page from "../Components/UI/Page";

const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault(); // prevent reload

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        form.current.reset();
    }

    return (
        <Page className="lg:w-3/12">
            <Banner img={banner} alt="contact-banner" text="Contact" />

            <form ref={form} onSubmit={sendMail} id="contact-form" className="my-5 w-full [&>section]:my-5">
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
        </Page>
    )
};

export default Contact;