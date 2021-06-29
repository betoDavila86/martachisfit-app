import './styles/Footer.sass';
import { UilGithub, UilLinkedin, UilTwitter } from '@iconscout/react-unicons';

const Footer = ({ onGoToArticles, onGoToWorkouts, onGoToDiets, onGoToRecipes }) => {
    let date = new Date();
    date = date.getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__developer">
                    <h3>Alberto Dávila</h3>
                    <span>Fullstack developer</span>
                </div>
                <div className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-link"><a href="#" onClick={onGoToRecipes}>Recetas</a></li>
                        <li className="footer__nav-link"><a href="#" onClick={onGoToWorkouts}>Entrenamiento</a></li>
                        <li className="footer__nav-link"><a href="#" onClick={onGoToDiets}>Dietas</a></li>
                        <li className="footer__nav-link"><a href="#" onClick={onGoToArticles}>Artículos</a></li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <a href="https://twitter.com/BetoDvila5" target="_blank"><UilTwitter size="30" className="footer__socials-icon" /></a>
                    <a href="https://github.com/betoDavila86" target="_blank"><UilGithub size="30" className="footer__socials-icon" /></a>
                    <a href="https://www.linkedin.com/in/alberto-davila-gomez/" target="_blank"><UilLinkedin size="30" className="footer__socials-icon" /></a>
                </div>
                <div className="footer__copy">
                    <span className="footer__copy-me">&#169; {date} Beto Dávila</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;