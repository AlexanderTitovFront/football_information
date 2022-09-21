import * as React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { teamMatchesRequest } from 'reduxData/actions';

export const useLoadTeamMatches = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    React.useEffect(() => {
        if(!id) return;
        dispatch(teamMatchesRequest(parseInt(id)));

    }, [dispatch, id]);

    return true;
}