import React from 'react';
import LogisticsMsg from '../LogisticsMsg';
import classes from './All.module.css'

const All = () => {
    return (
        <div>
            <LogisticsMsg/>
            <div className={classes.all}>
                <div className={classes.title}>标题</div>
                <div className={classes.main}>
                    <div className={classes.pic}>衣服图片</div>
                    <div className={classes.weight}>重量</div>
                </div>
                <div className={classes.time}>时间</div>
            </div>
        </div>
    );
};

export default All;