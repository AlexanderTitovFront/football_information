import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { teamsRequest } from 'reduxData/actions/teamsActions';
import { allTeams } from 'reduxData/selectors';

export const useLoadTeams = () => {
    
    const dispatch = useDispatch();
    const teams = useSelector(allTeams);

    React.useEffect(() => {
        if(teams.length > 0) return;
        dispatch(teamsRequest());

    }, [dispatch, teams.length]);

    return true;
}