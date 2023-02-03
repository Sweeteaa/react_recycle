import React from 'react';
import classes from './Footer.module.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.navigate}>
                <Link to='/' className={classes.main}><span>首页</span></Link>
                <Link to='/use' className={classes.main}><span>换购</span></Link>
                <Link to='/mine' className={classes.main}><span>我的</span></Link>
            </div>
        </div>
    );
};

export default Footer;