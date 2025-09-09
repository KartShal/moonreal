import { BASE_URL } from "../../../shared/const/const";
import { api }  from "../../../shared/api/api.jsx"

export const registerPost = (data) => {
    return api(BASE_URL).post('/register', data)
}