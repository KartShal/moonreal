import React, { useState } from "react";
import styles from './RegPage.module.css';
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { registerPost } from "./service/service";
import { useForm } from "react-hook-form"

const RegPage = () => {
    const [eye, setEye] = useState(false);
    const {register, handleSubmit, formState: { errors } } = useForm();

    const navigate =useNavigate()



    const postRegisterData = (data) => {
        registerPost(data).then((res) => {
            localStorage.setItem("user", res.data.user.email)
            if (res.status === 200 || res.status === 201) {
            navigate("/")
        }
        });
        
    }
    return (
        <>
        <div className={styles.RegPage}>
            <h1>Регистрация</h1>
            <form className={styles.inputs} onSubmit={handleSubmit(postRegisterData)}>
                <input 
                type="text" 
                placeholder="email..." 
                {...register("email", 
                { required: "Email обязателен", pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Введите корректный email",
                },
                })}
                />
                {
                        errors.email && (
                            <p className= {styles.error}>{errors.email.message}</p>
                        )
                }
                <div className={styles.password}>
                    <input 
                    type={eye ? "text" : "password"} 
                    placeholder='password...' 
                    {...register("password",{
                        required: "Пароль обязателен", 
                        minLength: {
                            value: 6,
                            message: "Минимальная длина 6 символов"
                        }, 
                        maxLength:  {
                            value: 30,
                            message: "Максимальная длина 30 символов"
                        }
                    })}
                    />
                    {
                        errors.password && (
                            <p className= {styles.error}>{errors.password.message}</p>
                        )
                    }
                    {eye ? (
                        <FaRegEye className={styles.eye} onClick={() => setEye(false)}/>
                    ) : (
                        <FaRegEyeSlash className={styles.eye} onClick={() => setEye(true)}/>)
                    }
                </div>
            <button type="submit">Регистрация</button>
            </form>
            <Link to={'/login'}>У меня есть аккаунт</Link>
        </div>
        </>
    )
}

export default RegPage