import React from 'react'
import { useSelector } from 'react-redux';
import { squad } from 'reduxData/selectors';
import { SquadHeader } from './SquadHeader';

export const Squad = () => {
    const squadMembers = useSelector(squad);
    if(!squadMembers || squadMembers.length === 0) return <></>

    return (
        <>
            <h3>Squad</h3>
            <SquadHeader />
            {squadMembers.map(squadMember => (
                <article
                    key={squadMember.id}
                    className='squad__wrap'
                >
                    <div 
                        className='squad__cell'
                    >
                        {squadMember.name}
                    </div>
                    <div ><b>{squadMember.position}</b></div>
                </article>
            ))}
        </>
    )
}