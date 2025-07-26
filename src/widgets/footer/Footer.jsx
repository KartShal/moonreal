import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.Footer}>
        <div className={styles.left}>
        <img src="./assets/country-house 1.svg" alt="" />
        <h2>Славянский терем</h2>
        </div>
        <div className={styles.middle}>
            <p>Опыт работы более 15 лет</p>
            <p>Строительство домов под ключ на территории Пермского края.</p>
        </div>
        </div>
    )
}

export default Footer