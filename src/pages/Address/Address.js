import axios from 'axios';
import React,{useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import { Field, Popup, Picker, Form, Button } from 'react-vant';
import Go from '../../components/Go/Go';
import { add,get } from '../../store/api/address';
import classes from './Address.module.css'

//新建地址页面
const columns = [
    {
      cityName: '浙江',
      cities: [
        {
          cityName: '杭州',
          cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
        },
        {
          cityName: '温州',
          cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
        },
      ],
    },
    {
      cityName: '福建',
      cities: [
        {
          cityName: '福州',
          cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
        },
        {
          cityName: '厦门',
          cities: [{ cityName: '思明区' }, { cityName: '海沧区' }],
        },
      ],
    },
];

const columnsFieldNames = {
    text: 'cityName',
    children: 'cities',
};

//城市选择器
function PickerItem(props) {
    const { value, onChange, name, ...fieldProps } = props;
    const [visible, setVisible] = useState(false);
  
    const onShow = () => {
      setVisible(true);
    };
    const onCancel = () => {
      setVisible(false);
    };
    const onConfirm = (val) => {
      onChange(val);
      onCancel();
    };
  
    return (
      <>
        <Field isLink readonly name={name} {...fieldProps} value={value} onClick={onShow} />
            <Popup 
                position="bottom" 
                round 
                visible={visible} 
                onClose={onCancel}
            >
                <Picker 
                    title="选择城市" 
                    columns={columns} 
                    onConfirm={onConfirm} 
                    onCancel={onCancel} 
                    columnsFieldNames={columnsFieldNames} 
                />
            </Popup>
      </>
    );
}
  

const Address = () => {
    const auth = useSelector(state => state.auth)
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    const [form] = Form.useForm();


    const onFinish = (values) => {
      console.log('form submit', values);
      let arr = ''
      for (let i of values.city){
        arr+= i + '-'
      }
      let params = {
        name:values.username,
        phone:values.phone,
        city:arr,
        detail:values.detail,
        username:auth.data.username
      }
      // console.log(arr)
      add(params)
      // return values
    };
    
    // const submitHandler = (e)=>{
    //   e.preventDefault();
    //   add(...onFinish)
    // }

    return (
        <div>
            <Go/>
            <Form 
                inset='true' 
                style={{width:'700rem',margin:'80rem 30rem'}}
                footer={
                    <div className={classes.btn}>
                        <Button 
                            round 
                            nativeType="submit" 
                            type="primary" 
                            block color='#008080' 
                            onClick={onFinish}
                            >
                            提交
                        </Button>
                    </div>
                }
                onFinish={onFinish} 
                form={form}
            >
                <Form.Item name="username" label="姓名" required style={{fontSize:'35rem'}}>
                    <Field 
                        placeholder={'请输入姓名'} 
                        value={value} 
                        // ref={refField}
                        onChange={setValue}
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="手机号码"
                    rules={[
                    {
                        validator: (_, value) => {
                        if (/1\d{10}/.test(value)) {
                            return Promise.resolve(true);
                        }
                        return Promise.reject(new Error('请输入正确的手机号码'));
                        },
                    },
                    ]}
                    required
                    style={{fontSize:'35rem'}}
                    value={value2} 
                    onChange={setValue2} 
                    // ref={refField}
                > 
                    <Field placeholder="请输入手机号码" />
                </Form.Item>
                <Form.Item 
                    required 
                    name="city" 
                    label="城市"
                    style={{fontSize:'35rem'}}
                >
                    <PickerItem/>
                </Form.Item>
                <Form.Item 
                    required 
                    label="详细地址"
                    name="detail"
                    style={{fontSize:'35rem'}}
                    value={value3} 
                    onChange={setValue3} 
                >
                    <Field 
                        placeholder="请输入详细地址" 
                    />
                </Form.Item>
                
            </Form>
        </div>
    );
};

export default Address;