import axios from 'axios'; 

const showNotification = (message) => {
    alert(`${ message }`);
}; 

const handleError = (error) => {
        if (!error.response) {
        showNotification( 'Ошибка сети или сервера');
        throw error;
    }


if (error.response.status === 401) {
    console.log("He Авторизован");
} else if (error.response.data && error.response.data.message) {
    showNotification(error.response.data.message);
} else {
    showNotification('Что-то пошло не так');
}
throw error;
};


export const api = (baseUrl) => {
    const resolvedBaseUrl = baseUrl;
    const instance = axios.create({ baseURL: resolvedBaseUrl });

    instance.interceptors.response.use(
        (response) => response,
        (error) => handleError(error),
    );

    return instance;
};