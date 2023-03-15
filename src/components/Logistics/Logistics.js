import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logistics.module.css'
import { FolderOutline, MessageOutline, TruckOutline, MoreOutline } from 'antd-mobile-icons'

const Logistics = () => {
    return (
        <div className={classes.list}>
                <div className={classes.title}>旧物回收订单</div>
                <div className={classes.lead}>
                    <Link to='/mine/logistics/no-recycle' className={classes.norecycle}>
                        <FolderOutline fontSize={'45rem'}/>
                        <div>待回收</div>
                    </Link>
                    <Link to='/mine/logistics/recycling' className={classes.recycling}>
                        <TruckOutline fontSize={'45rem'}/>
                        <div>回收中</div>
                    </Link>
                    <Link to='/mine/logistics/commit' className={classes.commit}>
                        <MessageOutline fontSize={'45rem'}/>
                        <div>待评价</div>
                    </Link>
                    <Link to='/mine/logistics/all' className={classes.all}>
                        <MoreOutline fontSize={'45rem'}/>
                        <div>所有订单</div>
                    </Link>
                </div>
        </div>
    );
};

export default Logistics;