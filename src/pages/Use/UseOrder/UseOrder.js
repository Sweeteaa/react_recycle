import React, { useState, useCallback, useEffect }  from 'react';
import { useSelector } from 'react-redux';
import Go from '../../../components/Go/Go';
// import useGetAddress from '../../../hooks/useGetAddress'
import { Image } from 'antd-mobile';
import { LocationFill, RightOutline, LeftOutline } from 'antd-mobile-icons'
import classes from './UseOrder.module.css'
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import { addUseOrder, updateIntegral } from '../../../store/api/UseOrder';


const UseOrder = (props) => {
    //获取用户信息
    const name = useSelector(state => state.auth)
    // console.log(name.data.Integral)
    //获取选择的换购物品id
    const {id} = useParams()
    // console.log(id)

    const [list, getList] = useState([])
    const [integral, getIntegral] = useState([])

    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/items/getDetail/${id}`,
            // data:{id:x.state.id},
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[id])
 
    const updateIntegral = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/user/getInfo/${name.data.username}`
        }).then((res) => {
            // console.log('res', res.data.data);
            getIntegral(res.data.data)
        });
    },[name])
 
    useEffect(() => {
        fetchData()
        updateIntegral()
    }, [fetchData,updateIntegral]);



    // console.log(list[0])

    //计数器
    const [num, changeNum] = useState(1)


    //从地址选择列表返回选择结果
    const address = useLocation()

    // console.log(address.state)

    //将填写好的信息传给后端
    const onFinish = (values) => {
        let params = {
            username:name.data.username,
            phone:address.state.address.phone,
            city:address.state.address.city,
            detail:address.state.address.detail,
            name:list[0].name,
            num:num,
            img:list[0].img,
            cost:list[0].cost,
            state:'未发货',
            type:list[0].type,
        }
        // console.log(integral.Integral - list[0].cost)
        let Integralnum = {
            Integral:integral.Integral - list[0].cost
        }
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/updateIntegral/${name.data.username}`,
                  data:Integralnum,
                  headers:{'Content-Type':'application/x-www-form-urlencoded'}
              })
            .then((res) => {
                resolve( res );
                if(res.data.status !== 1){
                    addUseOrder(params)
                }
                console.log(res)
            })
            .catch((error) => {
                reject( error );
                console.log(error)
            });
        })
        // updateIntegral(integral,params,name.data.username)
    }

    return (
        <div>
            {
                address.state.address &&
                <Link to={`/use/detail/${id}`} state={{id:id}} className={classes.go}>
                    <LeftOutline fontSize={'40rem'} />
                </Link> 
            }
            {
                !address.state.address &&
                <Go/>
            }
            <Link to="/home/choice" replace={true} state={{path:address.pathname}} >
                {
                    address.state.address &&
                    <div className={classes.address}>
                        <div className={classes.localicon}>
                            <LocationFill />
                        </div>
                        <div>
                            <div className={classes.userinfo}>
                                <div className={classes.username}>{address.state.address.name}</div>
                                <div className={classes.userphone}>{address.state.address.phone}</div>
                            </div>
                            <div className={classes.addressdetail}>{address.state.address.city}{address.state.address.detail}</div>
                        </div>
                        <div className={classes.righticon}>
                            <RightOutline />
                        </div>
                    </div>
                }
                {
                    !address.state.address &&
                    <div className={classes.null}>
                        <div className={classes.localicon}>
                            <LocationFill />
                        </div>
                        <div className={classes.word}>请选择地址</div>
                        <div className={classes.righticon}>
                            <RightOutline />
                        </div>
                    </div>
                }
            </Link>
            {
                list[0] &&
                <div>
                    <div className={classes.info}>
                        <div className={classes.img}>
                            <Image
                                key={list[0].id}
                                src={list[0].img}
                                width={'200rem'}
                                height={'200rem'}
                                fit='cover'
                                style={{borderRadius:'20rem'}}
                            />
                        </div>
                        <div className={classes.detail}>
                            <div className={classes.name}>{list[0].name}</div>
                            <div className={classes.cost}>消耗积分{list[0].cost}</div>
                        </div>
                        <div className={classes.change}>
                            {
                                num !==0?<button onClick={()=>changeNum(num-1)}>-</button>:<button disabled>-</button>
                            }
                            <p className={classes.num}>{num}</p>
                            <button onClick={()=>changeNum(num+1)}>+</button>
                        </div>
                    </div>
                    <div>
                        {
                            (list[0].cost*num <= integral.Integral && address.state.address) ?
                            <div className={classes.foot}>
                                <div className={classes.methon}>共消耗{list[0].cost*num}积分</div>
                                <Link to='/use'><button className={classes.btn} onClick={onFinish}>提交订单</button></Link>
                            </div>
                            :<div className={classes.foot}>
                                <div className={classes.methon}>积分不足/未选择地址</div>
                                <button className={classes.nobtn} disabled>提交订单</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default UseOrder;