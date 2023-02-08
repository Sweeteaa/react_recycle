import React from 'react';
import classes from './Use.module.css'
import Footer from '../../components/Footer/Footer'
import { Image } from 'antd-mobile';

const Use = () => {
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                拥有积分
            </div>
            <div className={classes.list}>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <Image
                            src={'https://pic2.zhimg.com/v2-4326c346a218b6ba3cb2c90d4ebff888_r.jpg?source=1940ef5c'}
                            width={140}
                            height={140}
                            fit='cover'
                        />
                    </div>
                    <div className={classes.info}>
                        <div>xxxx</div>
                        <div>需xx积分</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <Image
                            src={'https://pic2.zhimg.com/v2-4326c346a218b6ba3cb2c90d4ebff888_r.jpg?source=1940ef5c'}
                            width={140}
                            height={140}
                            fit='cover'
                        />
                    </div>
                    <div className={classes.info}>
                        <div>xxxx</div>
                        <div>需xx积分</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <Image
                            src={'https://pic2.zhimg.com/v2-4326c346a218b6ba3cb2c90d4ebff888_r.jpg?source=1940ef5c'}
                            width={140}
                            height={140}
                            fit='cover'
                        />
                    </div>
                    <div className={classes.info}>
                        <div>xxxx</div>
                        <div>需xx积分</div>
                    </div>
                </div>
                <div className={classes.item}>
                    <div className={classes.image}>
                        <Image
                            src={'https://pic2.zhimg.com/v2-4326c346a218b6ba3cb2c90d4ebff888_r.jpg?source=1940ef5c'}
                            width={140}
                            height={140}
                            fit='cover'
                        />
                    </div>
                    <div className={classes.info}>
                        <div>xxxx</div>
                        <div>需xx积分</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Use;