
import React from 'react';
import classes from './Home.module.css'
// import Logistics from '../../components/Logistics/Logistics';
import Activity from '../../components/Activity/Activity';
import Footer from '../../components/Footer/Footer'
import { Image } from 'antd-mobile'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import environmental from '../../assets/ae/robot.json'

const Home = () => {
    return (
        <div>
            {/* 首页装饰图 */}
            <div className={classes.top}>
                <Lottie animationData={environmental} loop={true} style={{ height: '300rem', width: '810rem', backgroundColor:'#38c172'}}/>
            </div>
            {/* 可回收物品类型展示 */}
            <div className={classes.list}>
                <Link to='/home/clothes' className={classes.out}>
                    <Image
                        src={'https://bpic.588ku.com/element_origin_min_pic/19/05/10/eebc84ba4b7a181030b0c570f73b1ee5.jpg'}
                        width={48}
                        height={48}
                        fit='cover'
                        style={{ borderRadius: 32 }}
                    />
                    <div>衣物</div>
                </Link>
                <Link to='/home/book' className={classes.out}>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.af95da0fe1722dcf4499b269138d28c3?rik=FZpk102UlTmcGA&riu=http%3a%2f%2fimg2.3png.com%2faf95da0fe1722dcf4499b269138d28c34385.png&ehk=209iKFBq3UXVwIJLCawVj535QA3vZdEXJMgxb9%2b%2f%2fvc%3d&risl=&pid=ImgRaw&r=0'}
                        width={48}
                        height={48}
                        fit='cover'
                        style={{ borderRadius: 32 }}
                    />
                    <div>书籍</div>
                </Link>
                <Link to='/home/item' className={classes.out}>
                    <Image
                        src={'https://img.51miz.com/preview/element/00/01/04/33/E-1043359-2FBDF89F.jpg'}
                        width={48}
                        height={48}
                        fit='cover'
                        style={{ borderRadius: 32 }}
                    />
                    <div>日用品</div>
                </Link>
                <Link to='/home/furniture' className={classes.out}>
                    <Image
                        src={'https://img.51miz.com/Element/00/38/90/21/be228759_E389021_01cdf1f7.png'}
                        width={48}
                        height={48}
                        fit='cover'
                        style={{ borderRadius: 32 }}
                    />
                    <div>家具</div>
                </Link>
            </div>
            {/* 物流信息展示 */}
            <div>
            </div>
            {/* 活动信息展示 */}
            <div>
                <Activity/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;