import * as React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { teamDetailsRequest } from 'reduxData/actions';

export const useLoadTeamDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    React.useEffect(() => {
        if(!id) return;
        dispatch(teamDetailsRequest(parseInt(id)));

    }, [dispatch, id]);

    return true;
}