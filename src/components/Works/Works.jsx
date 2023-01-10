import "./works.css";
import { WorkCard } from "../WorkCard/WorkCard"

export const Works = () => {

    return (
        <section className="works-section">
            <div className="container works-section__container">
                <h3 className="works-section__title">Featured works</h3>

                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
            </div>
        </section>
    )
}