import React from 'react';
import { BellOutline } from 'antd-mobile-icons';
import classes from './ActivityOrder.module.css'
import { Link } from 'react-router-dom';

const ActivityOrder = () => {
    return (
        <div className={classes.main}>
            <Link to='/mine/activitymsg' className={classes.left}>
                <BellOutline />
                <div>活动订单信息</div>
            </Link>
            <div className={classes.right}>
                <div>已获得积分</div>
                <div>10</div>
            </div>
        </div>
    );
};

export default ActivityOrder;