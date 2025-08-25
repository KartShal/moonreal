import { useParams } from "react-router-dom";
import  styles  from "./CardID.module.css";
import { useEffect, useState } from "react";
import { getHomeById } from "./service/service";

const CardID = () => {
    const [home, setHome] = useState();

    const id = useParams();
    console.log(id);
    
    useEffect(()=> {

        getHomeById(id.id).then((res)=> setHome(res.data))
    }, [id])
    return (
        <div className={styles.CardID}>
            { home && (
            <>
                <h2>{home.name}</h2>
                <img src={home.img} />
                <p>{home.desc}</p>
            </>
            )}
        </div>
    )
}
export default CardID