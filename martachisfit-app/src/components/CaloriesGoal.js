import './styles/CaloriesGoal.sass'
import grafico from './icons/grafico.png'
import { Link } from 'react-router-dom';
import { UilArrowRight, UilArrowLeft } from '@iconscout/react-unicons';

function CaloriesGoal({ macros }) {
    return <section className="goal">
        <h1 className="goal__title">
            Calorías objetivo
    </h1>
        {macros && <h1 className="goal__title">{macros.calories} Kcal</h1>}

        <div className="goal__macros">
            <img alt="grafico" src={grafico}></img>

            {macros && <p>{macros.carbs} gr Carbohidratos</p>}
            {macros && <p>{macros.protein} gr Proteínas</p>}
            {macros && <p>{macros.fats} gr Grasas</p>}
        </div>

        <h3 className="goal__subtitle">¡Estamos ready!</h3>

        <h3 className="goal__subtitle">Para conseguir el mejor resultado de tu nuevo estilo de vida, anota tus <span className="goal__calories">calorías objetivo</span> y completa tu....</h3>
        <div className="goal__register">
            <UilArrowRight size="50" className="goal__register-icon" />
            <Link to="/sign-up" className="goal__register-btn">REGISTRO</Link>
            <UilArrowLeft size="50" className="goal__register-icon" />
        </div>
    </section>

}

export default CaloriesGoal