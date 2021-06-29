import './styles/SavedFood.sass';
import { UilTrash } from '@iconscout/react-unicons';

export default function SavedFood({ food, onDelete, message }) {

    return <section className="saved-food">
        {food && food.length !== 0 ? <div className="saved-food__row-header">
            <p>Kcal</p><p>HC</p><p>Pr</p><p>Gr</p>
        </div> : ""}
        {food && !!food.length &&
            <ul className="saved-food__list">
                {food.map(({ name, calories, carbs, protein, fats, _id }) => <li key={_id} className="saved-food__food">
                    <div className="saved-food__block">
                        <p className="saved-food__block-item"><span className="saved-food__name">{name}</span></p>
                        <p className="saved-food__block-item">{calories}</p>
                        <p className="saved-food__block-item">{carbs}</p>
                        <p className="saved-food__block-item">{protein}</p>
                        <p className="saved-food__block-item">{fats}</p>
                        {<a onClick={event => {
                            event.preventDefault()

                            onDelete(_id)
                        }} className="saved-food__delete" href="#"><UilTrash size="35" /></a>}
                    </div>
                </li>)}
            </ul>}
        {message && <p className="saved-food__deleted">¡Registro borrado!</p>}
        {food && food.length !== 0 ? <p className="saved-food__total">Total {food && food.reduce((a, { calories }) => a + calories, 0)} Kcal</p> : <p className="saved-food__no-food">No hay registro aún</p>}
    </section>
}