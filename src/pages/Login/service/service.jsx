import { api } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const postLogin = (payload) => {
    return api(BASE_URL).post("/login", payload)
};