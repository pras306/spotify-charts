import React from 'react';

import './Loader.css';
import { loader } from '../../assets/index';

const Loader = ({ title }) => {
    return (
        <div className='mp__loader'>
            <img src={loader} alt='loader ' />
            <h1>{title ? title : 'Loading...'}</h1>
        </div>
    )
};

export default Loader;