
import React from 'react';
import classes from './Home.module.css'
import Logistics from '../../components/Logistics/Logistics';
import Activity from '../../components/Activity/Activity';

const Home = () => {
    return (
        <div>
            {/* 首页装饰图 */}
            <div className={classes.top}>
                <img src="https://ts1.cn.mm.bing.net/th/id/R-C.bdd69311c283c72172b9b953442a6fd9?rik=Adhbslif8zf5Zw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f33%2f9133.jpg&ehk=a2uOLeKDOQ4p%2fGDnxaTfx5N8VE6jTvR14S3VURUF%2bOk%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            {/* 可回收物品类型展示 */}
            <div className={classes.list}>
                <ul>
                    <li>衣物</li>
                    <li>书籍</li>
                    <li>日用品</li>
                    <li>家具</li>
                </ul>
            </div>
            {/* 物流信息展示 */}
            <div>
                <Logistics/>
            </div>
            {/* 活动信息展示 */}
            <div>
                <Activity/>
            </div>
        </div>
    );
};

export default Home;