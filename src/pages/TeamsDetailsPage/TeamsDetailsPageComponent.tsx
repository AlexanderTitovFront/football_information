import * as React from 'react'
import {useGetLoadStatus, useLoadTeamDetails} from 'hooks';
import {
    Squad,
    BasicInfo,
    Matches
} from './components';
import { useSelector } from 'react-redux';
import { teamLoaded } from 'reduxData/selectors';
import './styles.css';

export const TeamDetailsPageComponent = () => {
    useLoadTeamDetails();
    
    const loadingStatus = useSelector(teamLoaded);
    const showStatus = useGetLoadStatus(loadingStatus);
    if(showStatus) return (
        <div className='container'>
            <h3>{loadingStatus}</h3>
        </div>
    )

    return (
        <div className='container'>
            <BasicInfo />
            <Squad />
            <Matches />
        </div>
    )
}