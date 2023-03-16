import React from 'react';
import classes from './LogisticsMsg.module.css'
import { Link } from 'react-router-dom';
import { LeftOutline } from "antd-mobile-icons";

const LogisticsMsg = () => {
    return (
        <div className={classes.main}>
            <div className={classes.list}>
                <Link className={classes.top} to='/mine'><LeftOutline fontSize={'40rem'} /></Link>
                <div className={classes.lead}>
                    <Link to='/mine/logistics/all' className={classes.all}>
                        所有订单
                    </Link>
                    <Link to='/mine/logistics/no-recycle' className={classes.norecycle}>
                        待回收
                    </Link>
                    <Link to='/mine/logistics/recycling' className={classes.recycling}>
                        回收中
                    </Link>
                    <Link to='/mine/logistics/commit' className={classes.commit}>
                        待评价
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogisticsMsg;