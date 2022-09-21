import * as React from 'react'
import {Team} from 'pages/TeamsPage';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { useGetLoadStatus } from 'hooks';
import { allTeams } from 'reduxData/selectors';
import { teamsLoadingStatus } from 'reduxData/selectors';

export const TeamsList = () => {
    const teams = useSelector(allTeams);
    const loadingStatus = useSelector(teamsLoadingStatus);

    const showStatus = useGetLoadStatus(loadingStatus);
    if(showStatus) return <p>{loadingStatus}</p>

    return (
        <>
            {teams.map( (team:Team) =>
                <Link
                    to={`/teams/${team.id}`}
                    className='team_item'
                    key={team.id}
                >
                    <div>
                        <img
                            className='team_item__icon'
                            src={team.crestUrl}
                            alt=''
                        />
                    </div>
                    <div>{team.name}</div>
                </Link>
            )}
        </>
    )
}