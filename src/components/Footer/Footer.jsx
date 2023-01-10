import "./footer.css";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Vk from "../../assets/images/vk.svg";
import Copy from "../../assets/images/copy.svg";


export const Footer = () => {

    return (
        <footer className="footer">
            <div className="container footer__container">
                <ul className="footer__social-list">
                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={Facebook} alt="Facebook" width="45" height="45" />
                        </a>
                    </li>

                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={Twitter} alt="Twitter" width="45" height="45" />
                        </a>
                    </li>

                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={Vk} alt="Vk" width="45" height="45" />
                        </a>
                    </li>

                    <li className="footer__social-item">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src={Copy} alt="Copy" width="45" height="45" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}