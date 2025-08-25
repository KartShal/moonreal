import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';

function Card({name, img, id}) {
    const navigate = useNavigate();
    return (
        <div className={styles.Card}>
            <h3>{name}</h3>
            <img src={img} alt="home" />
            <button onClick={()=> navigate(`/cards/${id}`)}>Подробнее</button>
        </div>
    )
}

export default Card;