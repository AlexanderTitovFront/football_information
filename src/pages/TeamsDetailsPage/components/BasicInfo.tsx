import * as React from 'react'
import { useSelector } from 'react-redux';
import { logo, title } from 'reduxData/selectors';

export const BasicInfo = () => {
    const teamTitle = useSelector(title);
    const teamLogo = useSelector(logo);
    return (
        <div
            className='basic_info__wrap'
        >
            <img
                className='team-icon'
                src={teamLogo}
                alt=''
            />
            <h1>{teamTitle}</h1>
        </div>
    )
}