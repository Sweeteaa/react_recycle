import React from 'react';
import classes from './Activity.module.css'
import { Link } from 'react-router-dom';

const Activity = () => {
    return (
        <div className={classes.allpic}>
            <div className={classes.pic}>
                <img src='https://ts1.cn.mm.bing.net/th/id/R-C.98e93f6a0c7b64e6475fe3a8ed924a98?rik=bB82M9Tqp5hZww&riu=http%3a%2f%2fnews.tjut.edu.cn%2f__local%2f9%2f8E%2f93%2fF6A0C7B64E6475FE3A8ED924A98_E0C38C94_E6546.jpg&ehk=dxe4ksuMPDPbGStmUKB1rwjGPGkdLHu1%2fJU1THdrru0%3d&risl=&pid=ImgRaw&r=0'/>
                <div className={classes.detail}>
                    <div className={classes.title}>
                        线下回收项目
                    </div>
                    <div className={classes.desc}>
                        将在本市小区开展线下回收活动
                    </div>
                </div>
            </div>
            <div className={classes.pic}>
                <img src='https://img.zcool.cn/community/01157b5c80eadfa801217ce61c2b6b.jpg@1280w_1l_2o_100sh.jpg'/>
                <div className={classes.detail}>
                    <div className={classes.title}>
                        联合某平台开展绿色公益活动
                    </div>
                    <div className={classes.desc}>
                        将在某平台开展线上绿色回收公益活动
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;