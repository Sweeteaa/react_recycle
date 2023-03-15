import React from 'react';
import { Collapse } from 'antd-mobile'
import classes from './Knowlege.module.css'

const Knowlege = () => {
    return (
        <div className={classes.main}>
            <Collapse accordion>
            <Collapse.Panel key='1' title='回收注意事项'>
                ① 需要保证物品的完整性，会有工作人员进行回收物品审核。
                <br/>
                ② 不允许包含危险物品、腐蚀性物品。
            </Collapse.Panel>
            <Collapse.Panel key='2' title='换购商品操作流程'>
                ① 用户可在换购页面根据已拥有积分兑换物品。
                <br/>
                ② 换购物品需按要求填写信息。
                <br/>
                ③ 提交订单后将扣除相应的积分数目。
                <br/>
                ④ 可留意换购页面中订单进度查看物流信息。
                <br/>
            </Collapse.Panel>
            <Collapse.Panel key='3' title='积分规则说明'>
                ① 用户可在换购页面根据已拥有积分兑换物品。
                <br/>
                ② 换购物品需按要求填写信息。
                <br/>
                ③ 提交订单后将扣除相应的积分数目。
                <br/>
                ④ 可留意换购页面中订单进度查看物流信息。
                <br/>
            </Collapse.Panel>
            </Collapse>
        </div>
    );
};

export default Knowlege;