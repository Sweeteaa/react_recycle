import React from 'react';
import classes from './Clothes.module.css';
import { Form, Image, DatePicker, Selector, Button } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import dayjs from 'dayjs';
import { Link, useLocation } from 'react-router-dom';
import Go from '../../../../components/Go/Go';
import useGetAddress from '../../../../hooks/useGetAddress';
import { addOrder } from '../../../../store/api/order';
import { useSelector } from 'react-redux';
import useBackHome from '../../../../hooks/useBackHome';

//衣物回收订单创建页面
const Clothes = (props) => {
    const name = useSelector(state => state.auth)
    
    //将填写好的信息传给后端
    const onFinish = (values) => {
        // Dialog.alert({
        //   content: <pre>{JSON.stringify(values, null, 2)}</pre>,
        // })
        
        let params = {
            username:name.data.username,
            address:x.state.address,
            timePeriod:values.date,
            weight:values.weight[0],
            Integral:20,
            state:'first',
            type:'clothes'
        }
        console.log(params)
        addOrder(params)
        // console.log(JSON.stringify(values))
    }

    //获取当前所在路由 以及 从地址选择列表返回选择结果
    const x = useLocation()

    // console.log(x)


    return (
        <div className={classes.main}>
            <Go/> 
            <div className={classes.step}>
                <h2>回收步骤</h2>
                <div>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.09e387c5540697141685a5bf589c310a?rik=B6F8ajS0%2fz35rA&riu=http%3a%2f%2fimage.woshipm.com%2fwp-files%2f2019%2f04%2fuSEHnr2891lH3H7kLjIR.png!v.jpg&ehk=dV%2fFP5j6vwHIYs6MFqyXNXan%2beJsoNESHkofY51wsD8%3d&risl=&pid=ImgRaw&r=0'}
                        width={380}
                        height={24}
                        fit='cover'
                    />
                </div>
            </div>
            <div>
                回收流程
            </div>
            <div>
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
                                    x.state === {} || x.state === null?'请输入地址':
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
                        name='weight' 
                        label='回收衣物重量'
                    >
                        <Selector
                            columns={3}
                            multiple
                            options={[
                                { label: '8-20件', value: '10kg' },
                                { label: '20-60件', value: '40kg' },
                                { label: '60件+', value: '60kg' },
                            ]}
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Clothes;