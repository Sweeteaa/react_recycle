import React, { useCallback, useState, useEffect } from 'react';
import classes from './Use.module.css'
import Footer from '../../components/Footer/Footer'
import { Image } from 'antd-mobile';
// import { Image,FloatingBubble } from 'antd-mobile';
// import { ShopbagOutline } from 'antd-mobile-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Use = () => {
    const auth = useSelector(state => state.auth)
    const [list, getList] = useState([])

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
 
    useEffect(() => {
        fetchData()
    }, [fetchData]);

    // console.log(list)
    // console.log(auth.data)
    return (
        <div className={classes.main}>
            <div className={classes.title}>
                累计积分&nbsp;&nbsp;&nbsp;&nbsp;{auth.data==null?'0':auth.data.Integral}
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
                                    src={item.img}
                                    width={130}
                                    height={130}
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
            <Footer/>
        </div>
    );
};

export default Use;