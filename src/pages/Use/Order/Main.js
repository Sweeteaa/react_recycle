import React from 'react';
import classes from './Main.module.css'
import { Link } from 'react-router-dom';
import { LeftOutline } from "antd-mobile-icons";

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.list}>
            <Link className={classes.top} to='/use'>
                <LeftOutline fontSize={'40rem'} />
                <div className={classes.topfont}>换购订单</div>
            </Link>
                <div className={classes.lead}>
                    <Link to='/use/main/nogo' className={classes.norecycle}>
                        待发货
                    </Link>
                        <Link to='/use/main/going' className={classes.recycling}>
                        运输中
                    </Link>
                        <Link to='/use/main/commit' className={classes.commit}>
                        待评价
                    </Link>
                        <Link to='/use/main/all' className={classes.all}>
                        所有订单
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;