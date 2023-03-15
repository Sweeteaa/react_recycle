import React from 'react';
import classes from './Activity.module.css'

const Activity = () => {
    return (
        <div className={classes.allpic}>
            <div className={classes.pic}>
                <img src='https://img.tukuppt.com/bg_grid/01/03/49/oM33TIfgq3.jpg!/fh/350'/>
                <div className={classes.detail}>
                    <div className={classes.title}>
                        活动标题
                    </div>
                    <div className={classes.desc}>
                        活动简介
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;