import React,{ useState,useCallback,useEffect }  from 'react';
import { Link } from 'react-router-dom';
import classes from './Logistics.module.css'
import { Badge } from 'antd-mobile';
import { FolderOutline, MessageOutline, TruckOutline, MoreOutline } from 'antd-mobile-icons'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Logistics = () => {
    const name = useSelector(state => state.auth)
    const [norecycle, getNR] = useState([])
    const [recycling, getRI] = useState([])
    const [commit, getC] = useState([])
    //获取衣服种类订单数
    const RNoRecycle = useCallback(async () => {
        let params = {
            username:name.isLogged?name.data.username:null
        }
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/recycleorder/${'未回收'}`,
            data:params
        }).then((res) => {
            // console.log('res', res.data.data);
            getNR(res.data.data[0])
        });
    },[])

    //获取书籍种类订单数
    const RRecycling = useCallback(async () => {
        let params = {
            username:name.isLogged?name.data.username:null
        }
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/recycleorder/${'回收中'}`,
            data:params
        }).then((res) => {
            // console.log('res', res.data.data);
            getRI(res.data.data[0])
        });
    },[])

    //获取家具种类订单数
    const RCommit = useCallback(async () => {
        let params = {
            username:name.isLogged?name.data.username:null
        }
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/recycleorder/${'待评价'}`,
            data:params
        }).then((res) => {
            // console.log('res', res.data.data);
            getC(res.data.data[0])
        });
    },[])

    useEffect(() => {
        RNoRecycle()
        RRecycling()
        RCommit()
    }, [RNoRecycle,RRecycling,RCommit]);

    // console.log(recycling)
    return (
        <div className={classes.list}>
                <div className={classes.title}>旧物回收订单</div>
                <div className={classes.lead}>
                    <Link to='/mine/logistics/all' className={classes.all}>
                        <div className={classes.call}>
                            <MoreOutline fontSize={'45rem'}/>
                            <div>所有订单</div>
                        </div>
                    </Link>
                    <Link to='/mine/logistics/no-recycle' className={classes.norecycle}>
                        {
                            <Badge content={name.isLogged&&norecycle["count(1)"]?norecycle["count(1)"]:''} style={{'--right':'45rem','--top':'25rem'}} color={'darkcyan'}>
                                <div className={classes.call}>
                                    <FolderOutline fontSize={'45rem'}/>
                                    <div>待回收</div>
                                </div>
                            </Badge>
                        }
                    </Link>
                    <Link to='/mine/logistics/recycling' className={classes.recycling}>
                        {
                            <Badge content={name.isLogged&&recycling["count(1)"]?recycling["count(1)"]:''} style={{'--right':'45rem','--top':'25rem'}} color={'darkcyan'}>
                                <div className={classes.call}>
                                    <TruckOutline fontSize={'45rem'}/>
                                    <div>回收中</div>
                                </div>
                            </Badge>
                        }
                    </Link>
                    <Link to='/mine/logistics/commit' className={classes.commit}>
                        {
                            <Badge content={name.isLogged&&commit["count(1)"]?commit["count(1)"]:''} style={{'--right':'45rem','--top':'25rem'}} color={'darkcyan'}>
                                <div className={classes.call}>
                                    <MessageOutline fontSize={'45rem'}/>
                                    <div>待评价</div>
                                </div>
                            </Badge>
                        }
                    </Link>
                </div>
        </div>
    );
};

export default Logistics;