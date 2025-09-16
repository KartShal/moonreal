import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import { postLogin } from './service/service';
import { useForm } from 'react-hook-form';

function Login() {
    const [eye, setEye] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        postLogin(data)
            .then((res) => {
                localStorage.setItem("user", res.data.user.email);
                navigate("/");
            })
            .catch((err) => {
                console.error("Ошибка при логине:", err);
            });
    };

    return (
        <div className={styles.Login}>
            <h1>Логин</h1>
            <form className={styles.inputs} onSubmit={handleSubmit(handleLogin)}>
                
                <input
                    type="text"
                    placeholder="email..."
                    {...register("email", {
                        required: "Email обязателен",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Введите корректный email",
                        },
                    })}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                
                <div className={styles.password}>
                    <input
                        type={eye ? "text" : "password"}
                        placeholder="password..."
                        {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {
                                value: 6,
                                message: "Минимальная длина 6 символов",
                            },
                            maxLength: {
                                value: 30,
                                message: "Максимальная длина 30 символов",
                            },
                        })}
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                    {eye ? (
                        <FaRegEye className={styles.eye} onClick={() => setEye(false)} />
                    ) : (
                        <FaRegEyeSlash className={styles.eye} onClick={() => setEye(true)} />
                    )}
                </div>

                <button type="submit" className={styles.button}>Войти</button>
            </form>
            <Link to="/register">Перейти к регистрации</Link>
        </div>
    );
}

export default Login;
