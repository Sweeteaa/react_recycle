import React from 'react';
import Back from '../../components/Back/Back';
import classes from './LogisticsMsg.module.css'
import { Link } from 'react-router-dom';

const LogisticsMsg = () => {
    return (
        <div className={classes.list}>
            <div className={classes.top}><Back/></div>
            <div className={classes.lead}>
                <Link to='/mine/logistics/no-recycle' className={classes.norecycle}>
                    待回收
                </Link>
                    <Link to='/mine/logistics/recycling' className={classes.recycling}>
                    回收中
                </Link>
                    <Link to='/mine/logistics/commit' className={classes.commit}>
                    待评价
                </Link>
                    <Link to='/mine/logistics/all' className={classes.all}>
                    所有订单
                </Link>
            </div>
        </div>
    );
};

export default LogisticsMsg;