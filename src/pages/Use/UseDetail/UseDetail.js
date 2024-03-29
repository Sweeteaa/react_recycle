import React,{ useCallback, useState, useEffect } from 'react';
import useGetItem from '../../../hooks/useGetItem'
// import { useSelector } from 'react-redux';
import axios from 'axios';
import { Image } from 'antd-mobile';
import classes from './UseDetail.module.css'
import { Link } from 'react-router-dom';
import { LeftOutline } from 'antd-mobile-icons'

// 换购物品详情界面
const UseDetail = () => {
    const x = useGetItem()

    // 获取所点击的物品序号，向后端发送指定物品请求
    // console.log(x.state)

    // const auth = useSelector(state => state.auth)
    const [list, getList] = useState([])

    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/items/getDetail/${x.state.id}`,
            // data:{id:x.state.id},
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[x.state.id])
 
    useEffect(() => {
        fetchData()
    }, [fetchData]);
    // console.log(list)
    return (
        <div>
            <Link to={`/use`} className={classes.go}><LeftOutline fontSize={'40rem'} /></Link> 
            {
                list.length !==0 &&
                    
                <div className={classes.main}>
                    <div className={classes.img}>
                        <Image
                            key={list[0].id}
                            src={list[0].img}
                            width={'750rem'}
                            height={'750rem'}
                            fit='cover'
                        />
                    </div>
                    <div className={classes.info}>
                        <div className={classes.title}>
                            <div className={classes.cost}>{list[0].cost}积分</div>
                            <div className={classes.name}>{list[0].name}</div>
                        </div>
                        <div>
                            <div className={classes.has}>剩余库存 {list[0].has}</div>
                        </div>
                    </div>
                    <div className={classes.foot}>
                        <button className={classes.btn}><Link to={`/use/detail/${list[0].id}/${list[0].has}/order`} state={{list:list[0]}} style={{color:'#fff'}}>兑换</Link></button>
                    </div>
                </div>
            }
        </div>
    );
};

export default UseDetail;