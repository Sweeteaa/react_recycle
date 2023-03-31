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
          
      cityName: '北京市',
      cities: [
        {
          cityName: '北京市',
          cities: [{ cityName: '东城区' }, { cityName: '朝阳区' },{ cityName: '海淀区' }, { cityName: '西城区' }],
        }
      ],
    },
    {
      
      cityName: '天津市',
      cities: [
        {
          cityName: '天津市',
          cities: [{ cityName: '和平区' }, { cityName: '河西区' },{ cityName: '南开区' }, { cityName: '河东区' }],
        }
      ],
    },
    {
      
      cityName: '上海市',
      cities: [
        {
          cityName: '上海市',
          cities: [{ cityName: '静安区' }, { cityName: '长宁区' },{ cityName: '黄浦区' }, { cityName: '浦东新区' }],
        }
      ],
    },
    {
      cityName: '广东省',
      cities: [
        {
          cityName: '广州市',
          cities: [{ cityName: '越秀区' }, { cityName: '海珠区' },{ cityName: '天河区' }, { cityName: '荔湾区' },{ cityName: '白云区' }, { cityName: '番禺区' },{ cityName: '花都区' }, { cityName: '从化区' },{ cityName: '黄埔区' }, { cityName: '增城区' },{ cityName: '南沙区' }],
        },
        {
          cityName: '深圳市',
          cities: [{ cityName: '福田区' }, { cityName: '南山区' },{ cityName: '罗湖区' }, { cityName: '宝安区' },{ cityName: '蛇口区' }, { cityName: '龙华区' }],
        },
       {
          cityName: '佛山市',
          cities: [{ cityName: '南海区' }, { cityName: '禅城区' },{ cityName: '顺德区' }, { cityName: '高明区' },{ cityName: '三水区' }],
        },
        {
          cityName: '东莞市',
          cities: [{ cityName: '莞城街道' }, { cityName: '南城街道' },{ cityName: '东城街道' }, { cityName: '万江街道' }],
        },
      ]
    },
    {
      cityName: '浙江省',
      cities: [
        {
          cityName: '杭州市',
          cities: [{ cityName: '西湖区' }, { cityName: '余杭区' }],
        },
        {
          cityName: '温州市',
          cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }],
        },
      ],
    },
    {
      cityName: '福建省',
      cities: [
        {
          cityName: '福州市',
          cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }],
        },
        {
          cityName: '厦门市',
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