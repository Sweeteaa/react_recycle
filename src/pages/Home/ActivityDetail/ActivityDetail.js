import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import classes from './ActivityDetail.module.css'
import { useLocation, Link } from 'react-router-dom';
import { Image, ProgressBar } from 'antd-mobile';
import { Progress } from 'antd';
import { LeftOutline } from 'antd-mobile-icons';

const ActivityDetail = () => {
    const x = useLocation()
    const [list, getList] = useState()
    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/activity/getActivityDetail/${x.state.id}`
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
            {/* 活动详情页面{x.state.id} */}
            {
                list &&
                <div>
                    <Link className={classes.top} to='/home'><LeftOutline fontSize={'40rem'} /></Link>
                    <div className={classes.main}>
                        <div className={classes.msg}>
                            <div>
                                <Image 
                                    src={list[0].img}
                                    width={'100%'}
                                />
                            </div>
                            <div className={classes.title}>
                                {list[0].title}
                            </div>
                            <div className={classes.text}>
                                <div className={classes.texttop}>
                                    活动详情
                                </div>
                                <div className={classes.detail}>
                                    {list[0].main.match(/(?<=(<p[^>]*?>)).*?(?=(<\/p>))/g)}
                                </div>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.bar}>
                                <div>活动进度，还需{list[0].num-list[0].progress}</div>
                                <ProgressBar
                                    percent={list[0].progress / list[0].num * 100}
                                    text
                                    style={{
                                        '--text-width': '80rem',
                                        '--track-width': '24rem',
                                        width: '620rem',
                                        height: '50rem',
                                        '--fill-color': 'cadetblue',
                                    }}
                                />
                            </div>
                            <Link to={`/home/activity/${list[0].id}/order`} state={{list:list[0]}}>
                                <button className={classes.btn} >参与活动</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ActivityDetail;