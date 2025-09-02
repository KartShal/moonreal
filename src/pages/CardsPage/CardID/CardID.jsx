import { Link, useParams } from "react-router-dom";
import  styles  from "./CardID.module.css";
import React, { useEffect, useState } from "react";
import { getHomeById, putHomeById } from "./service/service";
import DeleteModal from "./components/deleteModal/deleteModal";
import { IoChevronBackOutline } from "react-icons/io5";

const CardID = () => {
    const [home, setHome] = useState();
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState();
    const [isDelete, setIsDelete] = useState (false)

    const nameRef = React.useRef();
    const descRef = React.useRef();

    const onChangeHandler = () => {
        setData({ name: nameRef.current.value , desc: descRef.current.value});        
    }

    const id = useParams();
    
    useEffect(()=> {
        getHomeById(id.id).then((res)=> setHome(res.data))
    },[id])

    const putData = () => {
        putHomeById(home.id, data).then((res) => setHome(res.data));
        setIsEdit(false);
    }

    
    return (
        <div className={styles.CardID}>
            <Link to={'/cards'} className={styles.back}><IoChevronBackOutline /> Назад</Link>
            { home && 
            (isEdit === false ? (
            <>
                <h2>{home.name}</h2>
                <img src={home.img} alt="img"/>
                <p>{home.desc}</p>
                <div className={styles.buttons}>
                    <button onClick={() => setIsDelete(true)}>Удалить</button>
                    <button onClick={() => setIsEdit(true)}>Редактировать</button>
                </div>
            </>
             ) : (
            <>
                <img src={home.img} alt="img"/>
                <div className={styles.inputs}>
                <input 
                    ref={nameRef} 
                    type="text" 
                    onChange={onChangeHandler} 
                    placeholder={home.name} 
                />
                <input 
                    onChange={onChangeHandler} 
                    ref={descRef} 
                    type="text"  
                    placeholder={home.desc} 
                />
                </div>
                <div className={styles.buttonsTrue}>
                    <button onClick={()=> setIsEdit(false)}>Отмена</button>
                    <button onClick={putData}>Сохранить</button>
                </div>
            </>
            ))}
            {home && <DeleteModal home={home} visible={isDelete} visibleFalse={() => setIsDelete(false)} />}
        </div>
    )
}

export default CardID