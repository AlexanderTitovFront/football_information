import * as React from 'react'

export const MatchesHeader = () => {
  return (
    <div 
        className='squad__wrap'
    >
        <div
            className='squad__cell'
        >
            <b>Date</b>
        </div>
        <div className='squad__cell'>
            <b>Opponent</b>
        </div>
        <div className='squad__cell'>
            <b>Competition</b>
        </div>
    </div>
  )
}