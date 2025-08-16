import { BASE_URL } from "../../../shared/const/const";
import { api }  from "../../../shared/api/api.jsx"
export const getHomes = async () => {
    const [homes, materials] = await Promise.all([
        api(BASE_URL).get('/home'),
        api(BASE_URL).get('/material')
    ]);

    return { homes: homes.data, materials: materials.data };
};