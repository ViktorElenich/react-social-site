import React from 'react';
import preloader from '../../assets/preloader/preloader.svg';

export const Preloader = (props) => {
    return (
        <div className="preloader"><img src={preloader} alt='preloader' /></div>
    )
}
