import React from 'react';
import classes from './Home.module.css'
// import Logistics from '../../components/Logistics/Logistics';
import Activity from '../../components/Activity/Activity';
import Footer from '../../components/Footer/Footer'
import { Image, NoticeBar } from 'antd-mobile'
import { RightOutline, LikeOutline } from 'antd-mobile-icons';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import environmental from '../../assets/ae/robot.json'
import cloth from '../../assets/css/cloth.png'
import book from '../../assets/css/book.png'
import furniture from '../../assets/css/furniture.png'
import daily from '../../assets/css/daily.png'
import step from '../../assets/css/step.png'
import Knowlege from '../../components/Knowlege/Knowlege';
import Tip from '../../components/Tip/Tip';

const Home = () => {
    return (
        <div>
            {/* 首页装饰图 */}
            <div className={classes.top}>
                <Lottie animationData={environmental} loop={true} style={{ height: '300rem', width: '810rem', backgroundColor:'#38c172'}}/>
            </div>
            <div className={classes.word}>旧物回收利用平台</div>
            <div className={classes.green}>绿色</div>
            <div className={classes.recycle}>环保</div>
            <div className={classes.round}><LikeOutline /></div>
            <div className={classes.step}>
                <div>旧物回收流程</div>
                <Image
                    src={step}
                    width={'98%'}
                    height={'180rem'}
                    fit='contain'
                />
            </div>
            {/* 可回收物品类型展示 */}
            <div className={classes.tlist}><RightOutline fontSize={'40rem'} /><RightOutline fontSize={'40rem'} />旧物回收</div>
            <div className={classes.notice}><NoticeBar content='每日10点统一上门回收' color='info' /></div>
            <div className={classes.list}>
                <div className={classes.row}>
                    <Link to='/home/clothes' className={classes.out}>
                        <Image
                            src={cloth}
                            width={'138rem'}
                            height={'138rem'}
                            fit='cover'
                        />
                        衣物
                    </Link>
                    <hr/>
                    <Link to='/home/book' className={classes.out}>
                        <Image
                            src={book}
                            width={'138rem'}
                            height={'138rem'}
                            fit='cover'
                        />
                        <div>书籍</div>
                    </Link>
                </div>
                <hr/>
                <div className={classes.row}>
                    <Link to='/home/item' className={classes.out}>
                        <Image
                            src={daily}
                            width={'138rem'}
                            height={'138rem'}
                            fit='cover'
                        />
                        <div>日用品</div>
                    </Link>
                    <hr/>
                    <Link to='/home/furniture' className={classes.out}>
                        <Image
                            src={furniture}
                            width={'138rem'}
                            height={'138rem'}
                            fit='cover'
                        />
                        <div>家具</div>
                    </Link>
                </div>
            </div>
            {/* 物流信息展示 */}
            <div>
            </div>
            {/* 活动信息展示 */}
            <div>
                <div className={classes.tlist}><RightOutline fontSize={'40rem'} /><RightOutline fontSize={'40rem'} />回收活动</div>
                <Activity/>
            </div>
            <div>
                <div className={classes.tlist}><RightOutline fontSize={'40rem'} /><RightOutline fontSize={'40rem'} />回收小Tips</div>
                <Knowlege/>
            </div>
            <div>
                <div className={classes.tlist}><RightOutline fontSize={'40rem'} /><RightOutline fontSize={'40rem'} />回收小知识</div>
                <Tip/>
            </div>
            <div className={classes.tips}>已经到底啦~~</div>
            <Footer/>
        </div>
    );
};

export default Home;