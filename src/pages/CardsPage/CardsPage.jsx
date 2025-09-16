import React, { useEffect, useState } from 'react';
import styles from './CardsPage.module.css'
import Card from './components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getHomes, postHome } from './service/service';
import { getHomesActionCreater } from '../../store/reducer/homereducer';
import { withRedirect } from '../../HOC/HOC';

function CardPage({store}) {

    const selector = useSelector((state) => state.homeReducerService.cardsListPage
);
    const secondselector = useSelector((state) => state.homeReducerService.cardsListPagesecond
);
        const dispatch = useDispatch();

        const [name, setName] = useState();
        const [desc, setDesc] = useState();

        console.log(name, desc);
        

        const nameRef = React.useRef();
        const descRef = React.useRef();

        const onChangeHandler = () => {
            setName(nameRef.current.value)
            setDesc(descRef.current.value)
        }

        const postNewHomeHandler = async () => {
            const newHome = {
                name: name,
                desc: desc,
                img: "/assets/home2.svg",
            };
            await postHome(newHome);
            await getHomes().then(({ homes, materials }) => 
        dispatch(getHomesActionCreater(homes, materials)))
            nameRef.current.value = "";
            descRef.current.value = "";
        }

        useEffect(() => {
            getHomes().then(({ homes, materials }) => 
        dispatch(getHomesActionCreater(homes, materials))
    );
}, [dispatch]);

    return (
        <>
    <div className={styles.CardsPage}>
        <h2>Строительство Коттеджей</h2>
        <div className={styles.inputs}>
            <input placeholder="Название..." ref={nameRef} onChange={onChangeHandler}/>
            <input placeholder="Описание..." ref={descRef} onChange={onChangeHandler}/>
            <button onClick={postNewHomeHandler}>Отправить</button>
        </div>
        <div className={styles.cardsList}>
            {
                selector.map((home)=>(
                    <Card name={home.name} img={home.img} id={home.id}/>
                ))
            }
        </div>
    </div>
    <div className={styles.CardsPagesecond}>
        <h2>Строительные материалы</h2>
        <div className={styles.cardsList}>
            {
                secondselector.map((home)=>(
                    <Card name={home.name} img={home.img} id={home.id}/>
                ))
            }
        </div>
    </div>
    </>
    )
}

export default withRedirect(CardPage);