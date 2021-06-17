import React from 'react';
import './Rank.css'

const Rank = ({ user }) => {
    return (
        <div className='linkMainContainer'>
            <p className='text smallMargin whiteColor'>{`${ user.name } your current searches are`}</p>
            <p className='text fontBigger smallMargin whiteColor'>{`${ user.entries }`}</p>
        </div>
    );
}

export default Rank;