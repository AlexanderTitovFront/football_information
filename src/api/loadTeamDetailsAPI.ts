import {TeamDetails} from 'pages/TeamsDetailsPage'
import { basicApi } from './basicApi';

export const loadTeamDetailsAPI = (teamId: number): Promise<TeamDetails> => {
    const resp:Promise<TeamDetails> = basicApi<TeamDetails>(`/teams/${teamId}`);
    return resp;
}