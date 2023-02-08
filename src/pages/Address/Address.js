import React,{useState} from 'react';
import { Field, Popup, Picker, Form, Button } from 'react-vant';
import Back from '../../components/Back/Back';

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

const Address = () => {
    const [fieldValue, setFieldValue] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [value2, setValue2] = useState('');

    return (
        <div>
            <Back/>
            <Form 
                inset='true' 
                style={{width:'700rem',margin:'80rem 30rem'}}
                footer={
                    <div style={{ margin: '16rem 16rem 0' }}>
                        <Button round nativeType="submit" type="primary" block>
                            提交
                        </Button>
                    </div>
                }
            >
                <Form.Item name="username" label="姓名" required>
                    <Field />
                </Form.Item>
                <Form.Item
                    name="text2"
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
                > 
                    <Field placeholder="手机号码" />
                </Form.Item>
                <Form.Item required>
                    <Field
                        readonly
                        clickable
                        label="城市"
                        value={fieldValue}
                        placeholder="选择城市"
                        onClick={() => setShowPicker(true)} 
                    />
                    <Popup
                        round
                        visible={showPicker}
                        position="bottom"
                        onClose={() => setShowPicker(false)}
                    >
                        <Picker
                            title="标题"
                            onConfirm={(value) => {
                                setFieldValue(value);
                                setShowPicker(false);
                            }}
                            columnsFieldNames={columnsFieldNames}
                            columns={columns}
                        />
                    </Popup>
                </Form.Item>
                <Form.Item required>
                    <Field value={value2} label="详细地址" onChange={setValue2} />
                </Form.Item>
            </Form>
        </div>
    );
};

export default Address;