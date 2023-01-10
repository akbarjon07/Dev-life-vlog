import "./hero.css";

export function Hero () {

    return (
        <section className="hero-section">
            <div className="container hero-section__container">
                <div className="hero-section__left">
                    <h1 className="hero-section__heading">Hi, I am John, Creative Technologist</h1>

                    <p className="hero-section__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <button className="hero-section__btn">Download Resume</button>
                </div>
            </div>
        </section>
    )
}