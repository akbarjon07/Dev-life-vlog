import "./posts.css";
import { Cards } from "../Cards/Cards"


export function Posts () {

    return (
        <section className="posts-section">
            <div className="container posts-section__container">
                <div className="posts-section__wrapper">
                    <h2 className="posts-section__title">Recent posts</h2>

                    <a className="posts-section__link" href="#">View all</a>
                </div>

                <div className="posts-section__card">
                    <Cards />

                    <Cards />
                </div>

            </div>
        </section>
    )
}