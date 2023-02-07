import React from 'react';
import classes from './Back.module.css'
import { LeftOutline } from 'antd-mobile-icons'
import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <div>
            <Link to='/' className={classes.back}><LeftOutline fontSize={'40rem'} /></Link>
        </div>
    );
};

export default Back;