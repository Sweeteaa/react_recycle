import React, { useState }  from 'react';
import Go from '../../../components/Go/Go';
// import { useCallback, useEffect } from 'react';
import useGetItem from '../../../hooks/useGetItem'
import { Image } from 'antd-mobile';
import classes from './UseOrder.module.css'


const UseOrder = (props) => {
    const x = useGetItem()
    // console.log(x.state)

    //计数器
    const [num, changeNum] = useState(1)

    return (
        <div>
            <Go/>
            <div>address</div>
            <div className={classes.info}>
                <div className={classes.img}>
                    <Image
                        key={x.state.list.id}
                        src={x.state.list.img}
                        width={'200rem'}
                        height={'200rem'}
                        fit='cover'
                        style={{borderRadius:'20rem'}}
                    />
                </div>
                <div className={classes.detail}>
                    <div className={classes.name}>{x.state.list.name}</div>
                    <div className={classes.cost}>消耗积分{x.state.list.cost}</div>
                </div>
                <div className={classes.change}>
                    {
                        num !==0?<button onClick={()=>changeNum(num-1)}>-</button>:<button disabled>-</button>
                    }
                    <p>{num}</p>
                    <button onClick={()=>changeNum(num+1)}>+</button>
                </div>
            </div>
            <div className={classes.foot}>
                <div className={classes.methon}>共消耗{x.state.list.cost*num}积分</div>
                <button className={classes.btn}>提交订单</button>
            </div>
        </div>
    );
};

export default UseOrder;