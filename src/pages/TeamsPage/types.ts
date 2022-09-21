import { TeamsLoadingStatus } from 'enums/teams'

export interface TeamsResponse {
    teams: Team[];
}

export type Team = {
    name: string,
    id: number,
    crestUrl: string,
}

export type TeamsStateType = {
    teams: [],
    loadingStatus: TeamsLoadingStatus 
}