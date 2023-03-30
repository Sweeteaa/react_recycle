import React, {useState} from 'react';
import classes from './Book.module.css'
import { Form, Image, DatePicker, Selector, Button, Toast } from 'antd-mobile'
import { RightOutline, LeftOutline } from 'antd-mobile-icons';
import dayjs from 'dayjs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import useGetDay from '../../../../hooks/useGetDay';
import step from '../../../../assets/css/step.png'

const Book = () => {
    const name = useSelector(state => state.auth)
    const navigate = useNavigate();
    
    //控制积分提示
    const [show, setShow] = useState(false)
    const [integral, setIntegral] = useState(0)

    let date = useGetDay()
    //将填写好的信息传给后端
    const onFinish = (values) => {
        let inte = 0
        if(values.weight[0] === "1"){
            inte = 1
        }else if(values.weight[0] === "5"){
            inte = 5
        }else{
            inte = 14
        }
        let params = {
            username:name.data.username,
            address:`${x.state.address.city}-${x.state.address.detail}`,
            timePeriod:values.date,
            weight:values.weight[0],
            Integral:inte,
            state:'未回收',
            type:'书籍',
            audit:false,
            addTime:date[0]
        }
        // console.log(params)
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://localhost:3001/user/order/addOrder`,
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
                    navigate('/success',{replace:true})
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

    //获取当前所在路由 以及 从地址选择列表返回选择结果
    const x = useLocation()

    // console.log(x)
    return (
        <div>
            <div className={classes.main}>
            <Link className={classes.top} to='/home'><LeftOutline fontSize={'40rem'} /></Link>
            <div className={classes.step}>
                <h2>回收步骤</h2>
                {/* <div>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.09e387c5540697141685a5bf589c310a?rik=B6F8ajS0%2fz35rA&riu=http%3a%2f%2fimage.woshipm.com%2fwp-files%2f2019%2f04%2fuSEHnr2891lH3H7kLjIR.png!v.jpg&ehk=dV%2fFP5j6vwHIYs6MFqyXNXan%2beJsoNESHkofY51wsD8%3d&risl=&pid=ImgRaw&r=0'}
                        width={380}
                        height={24}
                        fit='cover'
                    />
                </div> */}
            </div>
            <div>
                <Image
                    src={step}
                    width={'98%'}
                    height={'110rem'}
                    fit='contain'
                />
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
                        <DatePicker style={{touchAction:'none'}}>
                            {value =>
                                value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
                            }
                        </DatePicker>
                    </Form.Item>
                    <Form.Item name='weight' label='回收书本重量'>
                        <Selector
                            columns={3}
                            multiple={false}
                            options={[
                                { label: '3~9本', value: '1' },
                                { label: '9~18本', value: '5' },
                                { label: '18本+', value: '10' },
                            ]}
                            onChange={(value)=>{
                                if(value[0] === undefined){
                                    setShow(false)
                                }else{
                                    setShow(true)
                                }
                                // console.log(value[0])
                                if(value[0] === '1'){
                                    setIntegral('1~4')
                                }else if(value[0] === '5'){
                                    setIntegral('5~10')
                                }else{
                                    setIntegral('14+')
                                }
                            }}
                        />
                    </Form.Item>
                    <div>
                        {
                            show && 
                            <div className={classes.inte}>预计可获得积分：{integral}</div>
                        }
                    </div>
                </Form>
            </div>
        </div>
        </div>
    );
};

export default Book;