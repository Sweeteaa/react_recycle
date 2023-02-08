import React from 'react';
import Back from '../../../../components/Back/Back';
import classes from './Book.module.css'
import { Form, Image, DatePicker, Input, Selector, Button } from 'antd-mobile'
import dayjs from 'dayjs'

const Book = () => {
    return (
        <div>
            <div className={classes.main}>
            <Back/> 
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
                可回收种类
            </div>
            <div>
                <Form 
                    footer={
                        <Button block type='submit' color='primary' size='large'  shape='rounded' style={{'--background-color':'#008080'}}>
                            提交
                        </Button>
                } style={{width:'700rem',margin:'25rem'}}>
                    <Form.Item name='address' label='地址' help='详情地址' rules={[{ required: true }]}>
                        <Input placeholder='请输入地址' />
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
                    <Form.Item name='weight' label='回收书本重量'>
                        <Selector
                            columns={3}
                            multiple
                            options={[
                            { label: '8-20本', value: '1' },
                            { label: '20-60本', value: '2' },
                            { label: '60本+', value: '3' },
                            ]}
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
        </div>
    );
};

export default Book;