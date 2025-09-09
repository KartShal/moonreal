import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {

    const user = localStorage.getItem("user");
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("user");
        navigate("/register")
    }

    return (
        <>
        <div className={styles.Header}>
        <div className={styles.left}>
            <img src="./assets/country-house 1.svg" alt="Home" />
            <h2>Славянский терем</h2>
        </div>
        <div className={styles.middle}>
            <p>Опыт работы более 15 лет</p>
            <p>Строительство домов под ключ на территории Пермского края.</p>
        </div>
        <div className={styles.right}>
            <img src="./assets/vk-1.svg" alt="" />
            <img src="./assets/telephone 1.svg" alt="" />
            <button onClick={user != null ? logOut : () => navigate("/register") }>{user != null ? 'Выйти' : 'Регистрация'}</button>
        </div>
        </div>
                <div className={styles.NavBar}>
            <ul>
                <li><NavLink to={"/"}>Главная</NavLink></li>
                <li><NavLink to="/cards">Услуги</NavLink></li>
                <li>Проекты</li>
                <li>Отзывы</li>
            </ul>
        </div>
        </>
    )
};
export default Header