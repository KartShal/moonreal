import styles from './CardsPage.module.css'
import Card from './components/Card/Card';

function CardPage() {
    return (
    <div className={styles.CardsPage}>
        <h2>Строительство Коттеджей</h2>
        <div className={styles.cardsList}>
        <Card name='Из Газобетона' img='/assets/home1.svg'/>
        <Card name='Из Дерева' img='/assets/home2.svg'/>
        <Card name='Из Кирпича'img='/assets/home3.svg'/>
        <Card name='Из Пластик'img='/assets/home4.svg'/>
        </div>
    </div>
    )
}

export default CardPage;