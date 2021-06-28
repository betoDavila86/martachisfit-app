import ReactMarkdown from 'react-markdown';
import './styles/Workout.sass';
import quitar from '../components/icons/quitar.png';
import anadir from '../components/icons/anadir.png';
import { Feedback } from '../components/index';

export default function Workout({ source, onGoToWorkouts, onSaveWorkout, like, error }) {

    const { layout, daysWeek, setsWeek, name, level, description } = source

    return <>
        <div className="workout-pseudo">
            <div className="workout">
                <div className="workout__mov-title-heart">
                    <a onClick={onGoToWorkouts} className="workout__to-workouts">Atrás</a>
                    <h3 className="workout__name">{name}</h3>
                    <div className="workout__feedback">
                        {like ? <p>¡Añadida!</p> : <p>¿Añadir?</p>}
                        <button className="workout__heart-btn" onClick={() => onSaveWorkout(level)}>{like ? <img src={quitar} alt="on" width="20"></img> : <img src={anadir} alt="off" width="20"></img>}</button>
                    </div>
                    {error && <Feedback error={error} />}
                </div>
                <div className="workout__content">
                    <div className="workout__header">
                        <div className="workout__header-pre">
                            <p><span className="bold">Nivel:</span> {level}</p>
                            <p><span className="bold">Días:</span> {daysWeek}</p>
                            <p><span className="bold">Series/semana:</span> {setsWeek}</p>
                        </div>
                        <div className="workout__description">
                            <ReactMarkdown source={description} />
                        </div>
                    </div>
                    <div className="workout__content-workout">
                        <article className="workout__layout">
                            <ReactMarkdown source={layout} />
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </>
}

