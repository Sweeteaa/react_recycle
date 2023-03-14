import React from 'react';
import classes from './Main.module.css'
import { Link } from 'react-router-dom';
import Go from '../../../components/Go/Go';

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.list}>
                <div className={classes.top}><Go/></div>
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