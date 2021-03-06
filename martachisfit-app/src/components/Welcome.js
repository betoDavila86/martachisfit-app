import './styles/Welcome.sass'

export default function Welcome({ onGoToRecipes, onGoToDiets, onGoToArticles, onGoToDietDesign, onGoToWorkouts }) {

    const martaIg = "https://res.cloudinary.com/beto-cloud-name/image/upload/c_scale,h_520/v1607586947/marta-ig_xgxisr.jpg"

    return (<>
        <div className="welcome-pseudo">
            <div className="welcome">
                <h1 className="welcome__title"> Acomódate.... </h1>

                <div className="welcome__container">
                    <div className="welcome__cards">
                        <div className="welcome__recipes card__home" onClick={onGoToRecipes}>
                            <h3 className="welcome__subtitle">Recetas saludables</h3>
                            <p>¡Descubre las mejores recetas con ingredientes naturales que te permitirán disfrutar de las comidas dulces y saladas más ligeras!</p>
                        </div>

                        <div className="welcome__diets card__home" onClick={onGoToDiets}>
                            <h3 className="welcome__subtitle">Dietas personalizadas</h3>
                            <p>Ponemos a tu disposición una serie de dietas según tu objetivo calórico.
                                Además, puedes <span className="welcome__dietsdesign-link" onClick={onGoToDietDesign}>crear una dieta</span>
                                con tus alimentos y acceder a un registro diario.</p>
                        </div>

                        <div className="welcome__workouts card__home" onClick={onGoToWorkouts}>
                            <h3 className="welcome__subtitle">Rutinas de entrenamiento</h3>
                            <p>No importa tu nivel, tendrás una rutina que se adecuará al objetivo que deseas obtener.
                                Además, ponemos a tu disposición una base de datos ilustrada con ejercicios básicos dentro del entrenamiento de fuerza.
                            </p>
                        </div>

                        <div className="welcome__tips card__home" onClick={onGoToArticles}>
                            <h3 className="welcome__subtitle">Información y consejos</h3>
                            <p>El conocimiento es la clave del éxito. Aquí podrás encontrar las nociones básicas de alimentación y deporte para conseguir tu mejor versión</p>
                        </div>
                    </div>

                    <div className="welcome__img-container">
                        <div className="welcome__instagram">
                            <a href="https://www.instagram.com/martachis.fit/">
                                <h3 className="welcome__instagram-title">¡Y también en Instagram!</h3>
                                <img className="welcome__marta-img" src={martaIg} alt="marta-instagram" width="375px" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}