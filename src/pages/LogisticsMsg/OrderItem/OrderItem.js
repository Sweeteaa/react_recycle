import React from 'react';
import classes from './OrderItem.module.css'

const OrderItem = () => {
    return (
        <div className={classes.all}>
            <div className={classes.title}>标题</div>
            <div className={classes.main}>
                <div className={classes.pic}>衣服图片</div>
                <div className={classes.weight}>重量</div>
            </div>
            <div className={classes.time}>时间</div>
        </div>
    );
};

export default OrderItem;