function ContactDetails()
{
    return(
        <div className="contact__details">
            <div className="contact__details-card">
                <i class='bx bx-envelope contact__details-icon' ></i>
                <h3 className="contact__details-title">Email</h3>
                <span className="contact__details-subtitle">pabrikhushal@gmail.com</span>
            </div>
            <div className="contact__details-card">
                <i class='bx bxl-whatsapp contact__details-icon' ></i>
                <h3 className="contact__details-title">Whatsapp</h3>
                <span className="contact__details-subtitle">+91 9667009877</span>
            </div>
            <div className="contact__details-card">
                <i class='bx bxl-discord contact__details-icon' ></i>
                <h3 className="contact__details-title">Discord</h3>
                <span className="contact__details-subtitle">@derivativedr</span>
            </div>
        </div>
    );
}

export default ContactDetails;