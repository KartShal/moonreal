const { useState } = require("react")

const RegPage = () => {
    const [eye, setEye] = useState(false)
    return (
        <>
        <div className={styles.RegPage}>
            <h1>Регистрация</h1>
            <div className={styles.inputs}>
                <input type="text" placeholder="email..."  />
            </div>
        </div>
        </>
    )
}