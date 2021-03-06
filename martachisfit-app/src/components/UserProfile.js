import './styles/UserProfile.sass'
import { SavedFood, Chart } from '.'
import { retrieveSavedFood, toggleFoodUserDiet } from '../logic'
import { useState, useEffect } from 'react'
// import mancuerna from './icons/mancuerna.png'
// import bascula from './icons/bascula.png';
import { UilWeight, UilDumbbell } from '@iconscout/react-unicons'


export default function UserProfile({ user, avatar, onSaved, feedbackWeight, onLogout, savedArticles, savedRecipes, onGoToRecipe, onGoToChosenArticle, onGoToMyWorkout, myWorkouts, onSavePicture, onSaveWeight, onDelete }) {
    const [userChosenFoods, setUserChosenFoods] = useState()
    const [message, setMessage] = useState()

    const API_URL = process.env.REACT_APP_API_URL

    const { token } = sessionStorage

    const { fullname, weightHistory, id } = user

    useEffect(() => {
        try {
            retrieveSavedFood(token, (error, chosenFoods) => {
                if (error) return alert(error.message)

                setUserChosenFoods(chosenFoods)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleDeleteFood = foodId => {
        try {
            toggleFoodUserDiet(token, foodId, error => {
                if (error) return alert(error.message)

                setMessage(true)
                setTimeout(() => setMessage(false), 4000)
                retrieveSavedFood(token, (error, chosenFoods) => {
                    if (error) return alert(error.message)

                    setUserChosenFoods(chosenFoods)
                })
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSubmitPicture = event => {
        event.preventDefault()

        let { target: { image } } = event

        console.log(image.files[0]);
        onSavePicture(image.files[0])
    }

    const handleSubmitWeight = event => {
        event.preventDefault()

        let { target: { weight: { value: weight } } } = event

        onSaveWeight(parseFloat(weight))
        onSaved()

    }

    return <div className="user-profile-pseudo">
        <section className="user-profile">
            <div className="user-profile__container">
                <div className="user-profile__logout-container">
                    <button className="user-profile__delete" onClick={onDelete}>Borrar perfil</button>
                    <button className="user-profile__logout" onClick={onLogout}>Logout</button>
                </div>
                <div className="user-profile__avatar">
                    {fullname && <p className="user-profile__user">¡Hola, <span className="user-profile__user--name">{fullname}</span>!</p>}
                    {avatar ? <img className="user-profile__pic" src={`${API_URL}/users/${id}/uploads`} /> : <img className="user-profile__pic" src='https://st3.depositphotos.com/4111759/13425/v/380/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg' width='90' />}
                    <div className="user-profile__progression">
                        <form className="user-profile__avatar-form" onSubmit={handleSubmitPicture}>
                            <input className="user-profile__progression-input" type="file" id="image" name="image" />
                            <button className="user-profile__progression-btn">Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="user-profile__weights-container">
                    <h3 className="user-profile__title-container">Registro de peso</h3>
                    <div className="user-profile__chart">
                        {weightHistory && <Chart weightHistory={weightHistory} />}
                    </div>
                    <div className="user-profile__weights-record">
                        {/* <img src={bascula} className="user-profile__scale-img" alt="bascula"></img> */}
                        <UilWeight size="60" className="user-profile__weights-icon" />
                        {weightHistory.length > 1 ? <p className="user-profile__before">Previo: {weightHistory[weightHistory.length - 2].weight} Kg ({weightHistory[weightHistory.length - 2].modifiedAt})</p> : <p className="user-profile__before">Peso anterior: Sin registro</p>}
                        {weightHistory.length ? <p className="user-profile__current"><span className="bold">Actual: {weightHistory[weightHistory.length - 1].weight} Kg ({weightHistory[weightHistory.length - 1].modifiedAt}) </span></p> : <p className="user-profile__current">Peso actual: Sin registro</p>}
                        <form className="user-profile__weight-form" onSubmit={handleSubmitWeight}>
                            <input type="text" name="weight" placeholder="Tu peso actual"></input>
                            <button className="user-profile__weight-btn">Guardar</button>
                        </form>
                    </div>
                    {feedbackWeight && <p className="user-profile__feedback">Peso actualizado</p>}
                </div>

                <div className="user-profile__workout-container">
                    <h3 className="user-profile__title-container">Mi Rutina</h3>
                    {!myWorkouts.length && <p className="user-profile__no-workout">No has añadido tu rutina de entrenamiento</p>}
                    {myWorkouts && !!myWorkouts.length && <ul className="user-profile__workout-list">
                        {myWorkouts.map(({ name, id, level }) => <li key={id} className="user-profile__workout-item">
                            <UilDumbbell size="45" className="user-profile__workout-img" /><a className="user-profile__workout--link" onClick={() => onGoToMyWorkout(level)} href="#">{name.toUpperCase()}</a>
                        </li>)}
                    </ul>}
                </div>
                <div className="user-profile__recipes-container">
                    <h3 className="user-profile__title-container">¡Ponte el delantal!</h3>
                    {savedRecipes.length && savedRecipes ?
                        <div className="user-profile__recipes-carousel">
                            {savedRecipes.map(({ _id, urlPathImg }) =>
                                <div className="user-profile__recipes-carousel-recipe" key={_id} onClick={() => onGoToRecipe(_id)}>
                                    <img className="user-profile__recipes-carousel-img" src={urlPathImg} alt="recipe-img-saved" />
                                </div>)}
                        </div> : <p className="user-profile__no-recipes">No has añadido recetas a tu colección</p>}
                </div>

                <div className="user-profile__articles-container">
                    <h3 className="user-profile__title-container">Para leer....</h3>
                    {!savedArticles.length && <p className="user-profile__no-articles">No tienes artículos por leer</p>}
                    {savedArticles && !!savedArticles.length && <ul className="user-profile__articles">
                        {savedArticles.map(({ title, _id }) => <li key={_id} className="user-profile__articles-list">
                            <div className="user-profile__articles--list">
                                <a className="user-profile__articles--link" onClick={() => onGoToChosenArticle(_id)} href="#">{title}</a>
                            </div>
                        </li>)}
                    </ul>}
                </div>

                <div className="user-profile__record-container">
                    <h3 className="user-profile__title-container">Registro de alimentos</h3>
                    <SavedFood onDelete={handleDeleteFood} message={message} food={userChosenFoods} />
                </div>
            </div>
        </section>
    </div >
}
