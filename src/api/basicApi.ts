import {API_TOKEN, API_URL} from 'constants/api';

export const basicApi = <T>(
    url: string
): Promise<T> => {
    const resp:Promise<T> = fetch(
        `${API_URL}${url}`,

        {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_TOKEN,
            },
        }
    ).then( response => {
        if(!response.ok) throw new Error('');
        return response.json()
    })
    return resp;
}