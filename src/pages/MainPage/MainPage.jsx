import styles from './MainPage.module.css'

function MainPage () {
    return (
      <div className={styles.pageContent}>
        <div className={styles.Main}>
            <div className={styles.mainimage}>
                <img src="./assets/worker-building-frame-house 1.svg" alt="Рабочий" className={styles.Image} />
                <h1>Ваш дом - наша забота</h1>
            </div>
            <div className={styles.middle}>
                <h2>Строительство частных домов и коттеджей</h2>
                <p>
                    Строительство малоэтажных домов, коттеджей, модульных конструкций, реализация и разработка различных индивидуальных проектов - наша главная задача. Грамотный подход к делу, использование современных технологий и ответственность застройщика. Мы поможем вам в выборе участка, подборке стройматериалов и оформим полный пакет документов, ведь ваш дом - наша забота!
                </p>
            </div>
           <div className={styles.offerRow}>
        <div className={styles.specorder}>
          <img
            src="./assets/mmo1.svg"
            alt="специальное предложение"
            className={styles.orderImage}
          />
          <div className={styles.orderText}>
            <span>Специальное</span>
            <span>предложение</span>
          </div>
        </div>
      </div>
                <div className={styles.treeImage}>
                  <img src="./assets/Derevo-bez-fona 1.svg" alt="Дерево" />
                  <button className={styles.applyButton}>Оставить заявку</button>
                </div>
        </div>
      </div>
    )
}

export default MainPage
