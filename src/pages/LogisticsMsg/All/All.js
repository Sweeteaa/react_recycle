import React from 'react';
import LogisticsMsg from '../LogisticsMsg';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import classes from './All.module.css'

const All = () => {
    const name = useSelector(state => state.auth)
    const [list, getList] = useState([])

    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/order/getOrder/${name.data.username}`,
            data:{username:name},
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[name])
 
    useEffect(() => {
        fetchData()
    }, [fetchData]);

    // console.log(list)
    return (
        <div className={classes.outside}>
            <LogisticsMsg/>
            <div>
                {
                    list.map(item=>
                        item.state === '已完成' &&
                        <div className={classes.all} key={item.id}>
                            <div className={classes.title}>{item.type}</div>
                            <div className={classes.main}>
                                <div className={classes.pic}><img src='https://bpic.588ku.com/element_origin_min_pic/19/05/10/eebc84ba4b7a181030b0c570f73b1ee5.jpg' style={{height:'130rem',width:'130rem',borderRadius:'30rem'}}/></div>
                                <div className={classes.weight}>{item.weight}</div>
                            </div>
                            <div className={classes.time}>{item.timePeriod}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default All;