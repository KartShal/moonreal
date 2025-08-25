import { api } from "../../../../shared/api/api"
import { BASE_URL } from "../../../../shared/const/const"

export const getHomeById = (id) => {
    return api(BASE_URL).get(`/home/${id}`);
}