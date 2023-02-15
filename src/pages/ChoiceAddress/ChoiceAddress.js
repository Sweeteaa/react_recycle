import React, { useEffect, useState,useCallback } from 'react';
import Go from '../../components/Go/Go';
import classes from './ChoiceAddress.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Radio } from 'antd';

//地址选择

const ChoiceAddress = () => {
    const name = useSelector(state => state.auth)
    const [list, getList] = useState([])
    const [radio, setRadio] = useState(1)

    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:'http://localhost:3001/user/address/getAddress',
            data:{username:name},
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[name])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    const radioClick = (e)=>{
        setRadio(e.target.value)
    }

    return (
        <div>
            <Go/>
            <div className={classes.main}>
                {
                        list.map((item,index) => 
                            item && 
                            <div className={classes.out}>
                                <div className={classes.radio}>
                                    <Link to={'/home/clothes'} state={{address:'111'}} ><Radio value={item.id} onChange={radioClick}></Radio></Link>
                                </div>
                                <div className={classes.list}>
                                    <div className={classes.people}>
                                        <div className={classes.name}>{item.name}</div>
                                        <div className={classes.phone}>{item.phone}</div>
                                    </div>
                                    <div className={classes.address}>
                                        <div className={classes.sample}>{item.city}</div>
                                        <div className={classes.detail}>{item.detail}</div>
                                    </div>
                                </div>
                            </div>
                            // console.log(item.name)
                        )
                        // console.log(list)
                        
                }
            </div>
            <Link to='/home/address'><button className={classes.btn}>新增地址</button></Link>
        </div>
    );
};

export default ChoiceAddress;