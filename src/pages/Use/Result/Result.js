import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Result.module.css';
import { LeftOutline } from 'antd-mobile-icons';
import Res from '../../../components/Result/Res/Res';

const Result = () => {
    return (
        <div>
            <Link className={classes.top} to='/home' replace='true'><LeftOutline fontSize={'40rem'} /></Link>
            <Res/>
        </div>
    );
};

export default Result;