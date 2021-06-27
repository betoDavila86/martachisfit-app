import './styles/UserDiet.sass'

export default function UserDiet({ diet, onGoToDiets }) {

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return <div className="user-diet-pseudo">
        <section className="user-diet">
            <div className="user-diet__btn-container">
                <a href="#" className="user-diet__back" onClick={onGoToDiets}>Atrás</a>
            </div>
            <h2 className="user-diet__title">Para hoy <span className="user-diet__time">{today.toLocaleDateString()}</span></h2>

            {diet && <div className="user-diet__cal-type">
                <h4 className="user-diet__calories"> {diet.calories} kcal</h4>
                <h4 className="user-diet__type"> Tipo "{diet.type}" </h4>
            </div>}
            {diet && <div className="user-diet__macros">
                <p className="user-diet__carbs bold"> Carbohidratos {diet.macros.carbs} </p>
                <p className="user-diet__protein bold"> Proteína {diet.macros.protein} </p>
                <p className="user-diet__fats bold"> Grasas {diet.macros.fats} </p>
            </div>}
            <hr className="user-diet__line"></hr>
            {diet && <div className="user-diet__meals">
                <h4>Comida 1</h4>
                <p className="user-diet__meal">{diet.meals.meal1}</p>
                <h4>Comida 2</h4>
                <p className="user-diet__meal">{diet.meals.meal2}</p>
                <h4>Comida 3</h4>
                <p className="user-diet__meal">{diet.meals.meal3}</p>
                <h4>Comida 4</h4>
                {diet.meals.meal4 ?
                    <p className="user-diet__meal">{diet.meals.meal4}</p> : <p className="user-diet__meal">No disponible. Cumplimos objetivo con las comidas anteriores.</p>}
            </div>}
            <hr className="user-diet__line"></hr>
        </section>
    </div>
}