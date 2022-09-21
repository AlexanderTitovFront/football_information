import { TeamsLoadingStatus } from 'enums/teams'

export type TeamDetailsState = {
    details: TeamDetails,
    loadingStatus: TeamsLoadingStatus,
    matches: Match[]
    matchesLoadingStatus: TeamsLoadingStatus,
}

export type TeamDetails = {
    id: number,
    name: string,
    activeCompetitions?: ActiveCompetition[],
    crestUrl?: string,
    squad?: TeamMember[]
}

export type ActiveCompetition = {
    id: number,
    name: string
}

export type TeamMember = {
    id: number,
    name: string,
    position: string,
}

export type MatchResponse = {
    matches: Match[]
}

export type Match = {
    id: number,
    utcDate: string,
    homeTeam: MatchTeam,
    awayTeam: MatchTeam,
    competition: MatchCompetition
    opponentTitle?:string
}

export type MatchTeam = {
    id:number
    name: string,
}

export type MatchCompetition = {
    id: number,
    name: string
}