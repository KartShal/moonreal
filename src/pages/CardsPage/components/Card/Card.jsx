import styles from './Card.module.css'

function Card({name, img}) {
    return (
        <div className={styles.Card}>
            <h3>{name}</h3>
            <img src={img} alt="home" />
            <button>Подробнее</button>
        </div>
    )
}

export default Card;