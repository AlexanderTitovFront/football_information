import * as React from 'react'
import {useLoadTeams} from 'hooks';
import './styles.css';
import { TeamsList } from 'pages/TeamsPage/components/TeamsList';

export const TeamPageComponent = () => {
    useLoadTeams();

    return (
        <div className='container'>
            <h1>Choose a team</h1>
            <div className='teams_wrap'>
                <TeamsList />
            </div>
        </div>
    )
}