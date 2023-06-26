import { BASE_URL } from '../constant/common';

export const apiFetch = async (endpoint : string) => {
    const res = await fetch(BASE_URL + endpoint);
    
    if(res.status === 404) {
        // eslint-disable-next-line no-throw-literal
        throw {
            status: 404,
            message: res.statusText
        };
    }

    return res.json();
};