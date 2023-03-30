import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { Form,  DatePicker,  Button, Toast, Stepper } from 'antd-mobile';
import { RightOutline, LeftOutline } from 'antd-mobile-icons';
import dayjs from 'dayjs';
import axios from 'axios';
import classes from './ActivityOrder.module.css'
import Go from '../../../../components/Go/Go';
import useGetDay from '../../../../hooks/useGetDay';

const ActivityOrder = () => {     
    const name = useSelector(state => state.auth)

    const navigate = useNavigate();
    const {id} = useParams()
    //获取当前所在路由 以及 从地址选择列表返回选择结果
    const x = useLocation()
    // console.log(x)
    
    let date = useGetDay()
    //将填写好的信息传给后端
    const onFinish = (values) => {
    let params = {
        username:name.data.username,
        address:`${x.state.address.city}-${x.state.address.detail}`,
        timePeriod:values.date,
        num:values.num,
        activityid:id,
        state:'未回收',
        addTime:date[0]
    }
    // console.log(params)
    return new Promise((resolve,reject) => {
        axios({
              method:'post',
              url:`http://localhost:3001/user/activity/addActivityOrder`,
              data:params,
              headers:{'Content-Type':'application/x-www-form-urlencoded'}
          })
        .then((res) => {
            resolve( res );
            if(res.data.status !== 1){
                Toast.show({
                    icon: 'loading',
                    content: '加载中…',
                })
                navigate('/activityres',{replace:true})
            }else{
                Toast.show({
                    icon: 'fail',
                    content: '操作失败！',
                })
            }
            console.log(res)
        })
        .catch((error) => {
            reject( error );
            console.log(error)
        });
    })
    // console.log(JSON.stringify(values))
}
    return (
        <div>
            <div>
                {
                    x.state.address &&
                    <Link to={`/home/activity/${id}`} state={{id:id}} className={classes.go}>
                        <LeftOutline fontSize={'40rem'} />
                    </Link> 
                }
                {
                    !x.state.address &&
                    <Go/>
                }
                <Form 
                    onFinish={onFinish}
                    footer={
                            <Button 
                                block 
                                type='submit' 
                                color='primary' 
                                size='large'  
                                shape='rounded' 
                                style={{'--background-color':'#008080'}}
                                onClick={onFinish}
                            >
                                提交
                            </Button>
                    } 
                    style={{width:'700rem',margin:'25rem'}}
                >
                    <Form.Item  
                        label='地址' 
                        help='详情地址' 
                        rules={[{ required: true }]} 
                        required
                    >
                        <div className={classes.address}>
                            <Link to='/home/choice' state={{path:x.pathname}} className={classes.select}>
                                {
                                    x.state.list && '请输入地址'
                                }
                                {
                                    x.state.address  &&
                                    x.state.address.name+x.state.address.city+x.state.address.detail
                                }
                            </Link>
                            <div><RightOutline style={{color:'#C0C0C0'}}/></div>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name='date'
                        label='上门时间'
                        trigger='onConfirm'
                        onClick={(e, datePickerRef) => {
                            datePickerRef.current?.open()
                        }}
                        rules={[{ required: true }]}
                    >
                        <DatePicker>
                            {value =>
                                value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
                            }
                        </DatePicker>
                    </Form.Item>
                    <Form.Item 
                        name='num' 
                        label='捐出数量'
                    >
                        <Stepper
                            initialValues={1}
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ActivityOrder;