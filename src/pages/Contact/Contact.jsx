import "./contact.css";

export const Contact = () => {

    return (
        <section className="contact">
            <div className="container">
                <div className="contact__wrapper">
                    <h2 className="contact__title">Contact Now</h2>

                    <form className="contact__form">
                        <input className="contact__name-input input" type="text" placeholder="Name"/>

                        <input className="contact__mail-input input" type="email" placeholder="Email"/>

                        <input className="contact__message-input input" type="text" placeholder="Message"/>

                        <button className="contact__btn">Submit Form</button>
                    </form>
                </div>
            </div>
        </section>
    )
}