import './styles/Logout.sass'

export default function Logout({ onRefresh, name }) {

    return (<>
        <div className="logout-pseudo">
            <section className="logout">
                <div className="logout__text">
                    <div>
                        <h1 className="logout__bye">¡Nos vemos pronto, {name}!</h1>
                    </div>
                    <div>
                        <a className="logout__signin" href='#' onClick={onRefresh}>Salir</a>
                    </div>
                </div>
            </section>
        </div>
    </>)
}