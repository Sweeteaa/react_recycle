//我的页面
import React from 'react';
import classes from './Mine.module.css'
import Logistics from '../../components/Logistics/Logistics';
import Activity from '../../components/Activity/Activity';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { logout } from '../../store/reducer/authSlice';
import { Avatar } from 'antd-mobile'
import Footer from '../../components/Footer/Footer'

const Mine = () => {
    const auth = useSelector(state => state.auth)
    return (
        <div className={classes.main}>
            {/* 用户信息展示 islogged判断登录状态，true-登录、false-未登录 */}
            <div className={classes.message}>
                <div className={classes.pic}>
                    {
                        !auth.isLogged && 
                        <Avatar style={{'--border-radius':'80rem','--size': '150rem'}} src='' />
                    }
                    
                    {
                        auth.isLogged && 
                        <Avatar style={{'--border-radius':'80rem','--size': '150rem'}} src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9' />
                    }
                </div>
                <div className={classes.name}>
                    {
                        !auth.isLogged && 
                        <Link to='/author' className={classes.word}>请先登录!</Link>
                    }
                    
                    {
                        auth.isLogged && 
                        <div className={classes.word}>{auth.data.username}</div>
                    }
                </div>
            </div>
            {/* 物流信息展示 */}
            <Logistics/>
            {/* 活动展示 */}
            <Activity/>
            {/* 退出登录 islogged判断登录状态，true-登录、false-未登录 */}
            <div>
                {
                    auth.isLogged && 
                    <Link to='/' onClick={()=>store.dispatch(logout())}><button className={classes.exit}>退出</button></Link>
                }
            </div>
            
            <Footer/>
        </div>
    );
};

export default Mine;