//我的页面
import React from 'react';
import classes from './Mine.module.css'
import Logistics from '../../components/Logistics/Logistics';
import Activity from '../../components/Activity/Activity';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { logout } from '../../store/reducer/authSlice';

const Mine = () => {
    const auth = useSelector(state => state.auth)
    return (
        <div>
            {/* 用户信息展示 islogged判断登录状态，true-登录、false-未登录 */}
            <div className={classes.pic}>
                <div>
                    头像
                </div>
                <div>
                    {
                        !auth.isLogged && 
                        <Link to='/author' className={classes.main}><span>登录/注册</span></Link>
                    }
                    
                    {
                        auth.isLogged && 
                        <div className={classes.main}><span>{auth.data.username}</span></div>
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
                    <Link to='/' className={classes.exit} onClick={()=>store.dispatch(logout())}><button>退出</button></Link>
                }
            </div>
        </div>
    );
};

export default Mine;