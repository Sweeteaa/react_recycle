import React, { useState, useEffect,useCallback } from 'react';
import Main from '../Main';
import classes from './UAll.module.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const UAll = () => {
    const name = useSelector(state => state.auth)
    const [list, getList] = useState([])

    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/user/items/getUseOrder/${name.data.username}`,
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
            <Main/>
            <div>
                {
                    (list === null || list === undefined) &&
                    <div>暂无订单信息~</div>
                }
                {
                    !(list === null || list === undefined) &&
                    list.map(item=>
                        item.state === '已完成' &&
                        <div className={classes.all} key={item.id}>
                            <div className={classes.title}>{item.name}</div>
                            <div className={classes.main}>
                                <div className={classes.pic}><img src={item.img} style={{height:'130rem',width:'130rem',borderRadius:'30rem'}}/></div>
                                <div className={classes.weight}>×{item.num}</div>
                            </div>
                            <div className={classes.time}>已完成</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UAll;