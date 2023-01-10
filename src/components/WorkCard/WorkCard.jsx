import "./workCard.css";
import image1 from "../../assets/images/image.jpeg"

export const WorkCard = () => {

    return (
        <div className="work-card">
            <img className="work-card__img" src={image1} alt="img" width="246" height="180" />

            <div className="work-card__wrapper">
                <h3 className="work-card__title">Designing Dashboards</h3>

                <div className="work-card__info">
                    <p className="work-card__year">2020</p>

                    <p className="work-card__cat">Dashboard</p>
                </div>

                <p className="work-card__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    )
}