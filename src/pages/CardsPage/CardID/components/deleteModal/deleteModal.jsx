import { useNavigate } from 'react-router-dom';
import { deleteForId } from '../../service/service';
import styles from './deleteModal.module.css'


const DeleteModal = ({home, visible, visibleFalse}) => {
    const navigate = useNavigate();

    const deleteHome = () => {
            deleteForId(home.id)
            navigate("/")
        }

    return(
        <div className={`${styles.modal} ${visible === true ? styles.visible : ''}`}>
            <h3>Вы точно хотите удалить дом под названием {home.name} ? </h3>
            <div className={styles.buttonsModal}>
                <button onClick={deleteHome}>Подтвердить</button>
                <button onClick={visibleFalse}>Отмена</button>
            </div>
        </div>
    )
};

export default DeleteModal