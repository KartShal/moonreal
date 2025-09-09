import React, { useState } from "react";
import styles from './RegPage.module.css';
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { registerPost } from "./service/service";

const RegPage = () => {
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate =useNavigate()

    const eRef = React.useRef()
    const pRef = React.useRef()

    const onChange = () => {
        setEmail(eRef.current.value)
        setPassword(pRef.current.value)
    }


    const postRegisterData = () => {
        const data = {
            email,
            password,
        };

        registerPost(data).then((res) => localStorage.setItem("user", res.data.user.email));
        navigate("/");
    }
    return (
        <>
        <div className={styles.RegPage}>
            <h1>Регистрация</h1>
            <div className={styles.inputs}>
                <input type="text" placeholder="email..." ref={eRef} onChange={onChange} />
                <div className={styles.password}>
                    <input type={eye ? "text" : "password"} placeholder='password...' ref={pRef} onChange={onChange}/>
                    {eye ? (
                        <FaRegEye className={styles.eye} onClick={() => setEye(false)}/>
                    ) : (
                        <FaRegEyeSlash className={styles.eye} onClick={() => setEye(true)}/>)
                    }
                </div>
            </div>
            <button onClick={postRegisterData}>Регистрация</button>
            <Link to={'/login'}>У меня есть аккаунт</Link>
        </div>
        </>
    )
}

export default RegPage