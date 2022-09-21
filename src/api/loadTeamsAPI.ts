import {TeamsResponse} from 'pages/TeamsPage'
import { basicApi } from './basicApi';

export const loadTeamsAPI = (): Promise<TeamsResponse> => {
    const resp:Promise<TeamsResponse> = basicApi<TeamsResponse>(`/teams`);
    return resp;
}