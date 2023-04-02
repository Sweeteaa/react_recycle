import React, { useCallback, useState, useEffect } from 'react';
import classes from './Use.module.css'
import Footer from '../../components/Footer/Footer'
import { Image, Dropdown, Space, Radio } from 'antd-mobile';
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

    //换购物品排序分类
    const [updown, setUpdown] = useState('up')
    let arr =[]
    if(updown === 'up'){
        arr = list.sort((a, b) => a.cost - b.cost)
    }else{
        arr = list.sort((a, b) => b.cost - a.cost)
    }

    // console.log(updown)

    const [cate, setCate] = useState('全部')

    // console.log(arr)

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
            <div>
                <Dropdown>
                    <Dropdown.Item key='sorter' title='排序'>
                        <div style={{ padding: 12 }}>
                            <Radio.Group defaultValue='up' onChange={(value)=>{
                                setUpdown(value)
                            }}
                            >
                                <Space direction='vertical' block>
                                    <Radio block value='up'>
                                        升序
                                    </Radio>
                                    <Radio block value='down'>
                                        降序
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item key='bizop' title='类别筛选'>
                        <div style={{ padding: 12 }}>
                            <Radio.Group defaultValue='全部' onChange={(value)=>{
                                setCate(value)
                            }}>
                                <Space direction='vertical' block>
                                    <Radio block value='全部'>
                                        全部
                                    </Radio>
                                    <Radio block value='食物'>
                                        食物
                                    </Radio>
                                    <Radio block value='装饰'>
                                        装饰
                                    </Radio>
                                    <Radio block value='配饰'>
                                        配饰
                                    </Radio>
                                    <Radio block value='日用品'>
                                        日用品
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className={classes.list}>
                {
                    cate !== '全部' &&
                    arr.map((item,index)=>
                        item && item.type === cate &&
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
                {
                    cate === '全部' &&
                    arr.map((item,index)=>
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
                <div className={classes.tips}>未完待续，敬请等待......</div>
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
            <Footer/>
        </div>
    );
};

export default Use;