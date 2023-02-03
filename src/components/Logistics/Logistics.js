import React from 'react';
import classes from './Logistics.module.css'

const Logistics = () => {
    return (
        <div>
            <div className={classes.list}>
                <ul>
                    <li>待回收</li>
                    <li>回收中</li>
                    <li>回收完</li>
                    <li>所有订单</li>
                </ul>
            </div>
        </div>
    );
};

export default Logistics;