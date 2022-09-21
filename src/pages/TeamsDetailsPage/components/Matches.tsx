import * as React from 'react'
import { useGetLoadStatus, useLoadTeamMatches } from 'hooks'
import { useSelector } from 'react-redux';
import { matches, matchesLoaded } from 'reduxData/selectors';
import { MatchesHeader } from './MatchesHeader';

export const Matches = () => {
    useLoadTeamMatches();
    const teamMatches = useSelector(matches);
    const loadingStatus = useSelector(matchesLoaded);

    const showStatus = useGetLoadStatus(loadingStatus);
    if(showStatus) return (
        <>
            <h3>Upcoming matches</h3>
            <p>{loadingStatus}</p>
        </>
    )

    return (
        <>
            <h3>Upcoming matches</h3>
            <MatchesHeader />
            {teamMatches.map(match => (
                <article 
                    key={match.id}
                    className='squad__wrap'
                >
                    <div
                        className='squad__cell'
                    >
                        {match.utcDate}
                    </div>
                    <div className='squad__cell'>
                        {match.opponentTitle}
                    </div>
                    <div className='squad__cell'>
                        {match.competition.name}
                    </div>
                </article>
            ))}
        </>
    )
}