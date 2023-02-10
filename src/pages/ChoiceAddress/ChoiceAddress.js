import React from 'react';
import Go from '../../components/Go/Go';
import classes from './ChoiceAddress.module.css'
import { Link } from 'react-router-dom';

//地址选择

const ChoiceAddress = () => {
    return (
        <div>
            <Go/>
            <div className={classes.main}>
                <div className={classes.list}>
                    <div className={classes.people}>
                        <div className={classes.name}>name</div>
                        <div className={classes.phone}>phone</div>
                    </div>
                    <div className={classes.address}>
                        <div className={classes.sample}>sample</div>
                        <div className={classes.detail}>detail</div>
                    </div>
                </div>
            </div>
            <Link to='/home/address'><button className={classes.btn}>新增地址</button></Link>
        </div>
    );
};

export default ChoiceAddress;