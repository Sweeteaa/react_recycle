import React from 'react';
import Success from '../../components/Result/Sueecss';
import { Link } from 'react-router-dom';
import classes from './SResult.module.css';
import { LeftOutline } from 'antd-mobile-icons';

const SResult = () => {
    return (
        <div>
            <Link className={classes.top} to='/home' replace='true'><LeftOutline fontSize={'40rem'} /></Link>
            <Success/>
        </div>
    );
};

export default SResult;