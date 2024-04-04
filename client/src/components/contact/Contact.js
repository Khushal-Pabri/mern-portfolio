import React from "react";
import "./contact.css"
import ContactDetails from "./ContactDetails.js"
import ContactForm from "./ContactForm.js";

function Contact()
{
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk To me</h3>
                    <ContactDetails />
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your message</h3>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;