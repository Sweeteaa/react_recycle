import React from 'react';
import classes from './Address.module.css'

const Address = (props) => {
    return (
        <div>
            <div className={classes.list}>
                <div className={classes.people}>
                    <div className={classes.name}>{props.list}</div>
                    <div className={classes.phone}>{props.list}</div>
                </div>
                <div className={classes.address}>
                    <div className={classes.sample}>{props.list}</div>
                    <div className={classes.detail}>{props.list}</div>
                </div>
            </div>
        </div>
    );
};

export default Address;