import React, { useEffect, useState, useCallback } from 'react';
import Go from '../../../components/Go/Go';
import classes from './ActivityOrderMsg.module.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { HeartFill } from 'antd-mobile-icons';
import { Link } from 'react-router-dom';

const ActivityOrderMsg = () => {
    const name = useSelector(state => state.auth)
    const [list, getList] = useState()
    //获取活动订单列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/activity/getUserOrder/${name.data.username}`
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[])
    
    useEffect(() => {
        fetchData()
    }, [fetchData]);

    // console.log(list)

    return (
        <div>
            <Go/>
            <div>
                {
                    list &&
                    list.map(item=>
                        <div className={classes.all} key={item.id}>
                            <div className={classes.top}>
                                <div className={classes.title}>回收活动</div>
                                <div className={classes.state}>{item.state}</div>
                            </div>
                            <div className={classes.main}>
                                <div className={classes.pic}><HeartFill fontSize={52} color='#cb3a56'/></div>
                                <div className={classes.detail}>
                                    <div className={classes.weight}>{item.num}</div>
                                </div>
                            </div>
                            <div className={classes.time}>{item.timePeriod.replace("T16:00:00.000Z","")}</div>
                        </div>
                    ).reverse()
                }
                {
                    !list &&
                    <div>
                        <div>暂无活动订单~快去参与吧！</div>
                        <Link to='/home'><button>回到首页</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ActivityOrderMsg;