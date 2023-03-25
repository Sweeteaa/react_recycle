import React, { useState, useEffect, useCallback } from 'react';
import classes from './Activity.module.css'
import axios from 'axios';
import { Ellipsis } from 'antd-mobile';
import { Link } from 'react-router-dom';

const Activity = () => {
    const [list, getList] = useState()
    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/activity/getActivity`
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[])
 
    useEffect(() => {
        const timer = setInterval(() => {
            //可以调接口
            //可以存state，如setCount(count + 1)
            //可以调其他函数
                fetchData()
            }, 1000);
            return () => {
                clearInterval(timer)
            };
    }, [fetchData]);

    return (
        <div className={classes.allpic}>
            {
                (list === [] || list === undefined) &&
                <div>暂无活动信息~敬请期待！</div>
            }
            {
                !(list === [] || list === undefined) &&
                list.map(item=>
                    <Link 
                        to={`/home/activity/${item.id}` }
                        state={{id:item.id}}
                        className={classes.pic} 
                        key={item.id}
                    >
                        <img src={item.img}/>
                        <div className={classes.detail}>
                            <div className={classes.title}>
                                {item.title}
                            </div>
                            <div className={classes.desc}>
                                <Ellipsis direction='end' content={item.text} />
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default Activity;