import React from 'react';
import classes from './Mine.module.css'
import Logistics from '../../components/Logistics/Logistics';
import Activity from '../../components/Activity/Activity';
import { Link } from 'react-router-dom';

const Mine = () => {
    return (
        <div>
            <div className={classes.pic}>
                <div>
                    头像
                </div>
                <div>
                    <Link to='/author' className={classes.main}><span>登录/注册</span></Link>
                </div>
            </div>
            <Logistics/>
            <Activity/>
        </div>
    );
};

export default Mine;