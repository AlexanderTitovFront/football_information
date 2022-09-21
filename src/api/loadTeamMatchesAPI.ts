import { MatchResponse } from 'pages/TeamsDetailsPage';
import { basicApi } from './basicApi';

export const loadTeamMatchesAPI = (teamId: number): Promise<MatchResponse> => {

    const dateFrom = new Date();
    const dateTo:Date = new Date();
    dateTo.setMonth(dateTo.getMonth() + 6);
    
    const dateFromPrepared = dateFrom.toISOString().split('T')[0];
    const dateToPrepared = dateTo.toISOString().split('T')[0];

    const resp:Promise<MatchResponse> = basicApi<MatchResponse>(`/teams/${teamId}/matches?limit=10&dateFrom=${dateFromPrepared}&dateTo=${dateToPrepared}`);
    return resp;
}