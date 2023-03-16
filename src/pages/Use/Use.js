import React, { useCallback, useState, useEffect } from 'react';
import classes from './Use.module.css'
import Footer from '../../components/Footer/Footer'
import { Image } from 'antd-mobile';
// import { Image,FloatingBubble } from 'antd-mobile';
import { FolderOutline, TruckOutline, MessageOutline, MoreOutline } from 'antd-mobile-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { store } from '../../store';
import useUpdateIntedral from '../../hooks/useUpdateIntegral';

const Use = () => {
    const auth = useSelector(state => state.auth)
    const [list, getList] = useState([])
    const [integral, getIntegral] = useState([])

    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:'http://localhost:3001/user/items/getCate',
            data:{username:auth},
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[auth])

    // console.log(list)

    const updateIntegral = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/user/getInfo/${auth.data.username}`,
            data:{username:auth},
        }).then((res) => {
            // console.log('res', res.data.data);
            getIntegral(res.data.data)
        });
    },[auth])
 
    useEffect(() => {
        fetchData()
        updateIntegral()
    }, [fetchData,updateIntegral]);

    // console.log(integral)
    // console.log(auth.data)
    return (
        <div className={classes.main}>
            <div className={classes.top}>
                <div className={classes.select}>
                    <div className={classes.order}>
                        订单<br/>进度
                    </div>
                    <div className={classes.lead}>
                        <Link to='/use/main/nogo' className={classes.link}>
                            <FolderOutline fontSize={'45rem'}/>
                            <div>待发货</div>
                        </Link>
                        <Link to='/use/main/going' className={classes.link}>
                            <TruckOutline fontSize={'45rem'}/>
                            <div>运输中</div>
                        </Link>
                        <Link to='/use/main/commit' className={classes.link}>
                            <MessageOutline fontSize={'45rem'}/>
                            <div>待评价</div>
                        </Link>
                        <Link to='/use/main/all' className={classes.link}>
                            <MoreOutline fontSize={'45rem'}/>
                            <div>所有订单</div>
                        </Link>
                    </div>
                </div>
                <div className={classes.title}>
                    累计积分&nbsp;&nbsp;&nbsp;&nbsp;{auth.data==null?'0':integral.Integral}
                </div>
            </div>
            <div className={classes.list}>
                {
                    list.map((item,index)=>
                        item &&
                        <Link 
                            to={`/use/detail/${item.id}` }
                            state={{id:item.id}}
                            className={classes.item} 
                            key={item.id}
                        >
                            <div className={classes.image}>
                                <Image
                                    key={item.id}
                                    src={`${item.img}`}
                                    width={'200rem'}
                                    height={'200rem'}
                                    fit='cover'
                                    style={{borderRadius:'10rem'}}
                                />
                            </div>
                            <div className={classes.info}>
                                <div className={classes.name}>
                                    <div>{item.name}</div>
                                </div>
                                <div className={classes.cost}>
                                    <div style={{color:'gray'}}>需{item.cost}积分</div>
                                    <div><button className={classes.btn}>+</button></div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            {/* <FloatingBubble
                style={{
                    '--initial-position-bottom': '128rem',
                    '--initial-position-right': '24rem',
                    '--edge-distance': '24rem',
                    '--background':'pink',
                }}
                // onClick={onClick}
            >
                <ShopbagOutline fontSize={32}/>
            </FloatingBubble> */}
            <div className={classes.tips}>未完待续，敬请等待......</div>
            <Footer/>
        </div>
    );
};

export default Use;