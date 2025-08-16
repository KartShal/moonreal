import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'
import { FaLocationArrow } from "react-icons/fa";

function NotFoundPage () {
    return (
        <div className={styles.wrapper}>
            <h2>Такой страницы не существует!</h2>
            <img src="/assets/404.svg" alt="404!" />
            <Link to={"/"}>На главную <FaLocationArrow /></Link>
        </div>
    )
}

export default NotFoundPage