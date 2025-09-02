import { api } from "../../../../shared/api/api"
import { BASE_URL } from "../../../../shared/const/const"

export const getHomeById = (id) => {
    return api(BASE_URL).get(`/home/${id}`);
}

export const getMaterialById = (id) => {
    return api(BASE_URL).get(`/material/${id}`)
}

export const putHomeById = (id, data) => {
    return api(BASE_URL).put(`/home/${id}`, data)
}

export const deleteForId = (id) => {
    return api(BASE_URL).delete(`/home/${id}`)
}