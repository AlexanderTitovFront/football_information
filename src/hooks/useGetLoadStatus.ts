import * as React from 'react'
import { TeamsLoadingStatus } from 'enums/teams';
export const useGetLoadStatus = (
    loadingStatus:TeamsLoadingStatus
) => {

    const [showStatus, setShowStatus] = React.useState(true);

    React.useEffect(() => {
        if(loadingStatus === TeamsLoadingStatus.Finished) {
            setShowStatus(false);
            return;
        }
        setShowStatus(true);
    }, [loadingStatus]);

    return showStatus;
}