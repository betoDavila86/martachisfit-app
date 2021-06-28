import './styles/Footer.sass';

const Footer = ({ onGoToArticles, onGoToWorkouts, onGoToDiets, onGoToRecipes }) => {
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
                    <span>Twitter</span>
                    <span>Github</span>
                    <span>LinkedIn</span>
                </div>
                <div className="footer__copy">
                    <span className="footer__copy-me">&#169;Beto Dávila</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;