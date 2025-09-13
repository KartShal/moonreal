import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import { postLogin } from './service/service';


function Login() {
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const navigate = useNavigate()

    const eRef = React.useRef()
    const pRef = React.useRef()

    const onChangeInput = () => {
        setEmail(eRef.current.value)
        setPassword(pRef.current.value)
    }

    const handleLogin = () => {
        try{
            postLogin({ email, password}).then((res)=> 
                {localStorage.setItem("user", res.data.user.email);
                 navigate("/")   
                })
        }finally{

        }
    }


    return (
        <div className={styles.Login}>
            <h1>Логин</h1>
            <div className={styles.inputs}>
                <input placeholder='email...'  ref={eRef} onChange={onChangeInput}/>
                <div className={styles.password}>
                    <input placeholder='password...'  ref={pRef} type={eye ? 'text' : 'password'} onChange={onChangeInput}/>
                    {eye ? 
                    <FaRegEye className={styles.eye} onClick={() => setEye(false)}/> 
                        : 
                    <FaRegEyeSlash className={styles.eye} onClick={() => setEye(true)}/>}
                </div>
            </div>
            <button onClick={handleLogin}>Войти</button>
            <Link to={"/register"}>Перейти к регистрацию</Link>
        </div>
    )
}

export default Login;   