import { useEffect } from 'react';
import styles from './CardsPage.module.css'
import Card from './components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getHomes } from './service/service';
import { getHomesActionCreater } from '../../store/reducer/homereducer';

function CardPage({store}) {

    const selector = useSelector((state) => state.homeReducerService.cardsListPage
);
    const secondselector = useSelector((state) => state.homeReducerService.cardsListPagesecond
);
        const dispatch = useDispatch();

        useEffect(() => {
            getHomes().then(({ homes, materials }) => 
        dispatch(getHomesActionCreater(homes, materials))
    );
}, [dispatch]);

    return (
        <>
    <div className={styles.CardsPage}>
        <h2>Строительство Коттеджей</h2>
        <div className={styles.cardsList}>
            {
                selector.map((home)=>(
                    <Card name={home.name} img={home.img}/>
                ))
            }
        </div>
    </div>
    <div className={styles.CardsPagesecond}>
        <h2>Строительные материалы</h2>
        <div className={styles.cardsList}>
            {
                secondselector.map((home)=>(
                    <Card name={home.name} img={home.img}/>
                ))
            }
        </div>
    </div>
    </>
    )
}

export default CardPage;