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
                <div>
                    由工作人员核实最终物品重量，根据最终重量✖以下三个档的倍率获取对应的积分
                    <h4>衣服和书籍</h4>
                    <ul>
                        <li>
                            第一档：1~5kg——在该范围内对应的重量将乘以1.1
                        </li>
                        <li>
                            第二档：5~10kg——在该范围内对应的重量将乘以1.4
                        </li>
                        <li>
                            第三档：10kg——在该范围内对应的重量将乘以1.8
                        </li>
                    </ul>
                    <h4>家具</h4>
                    <ul>
                        <li>
                            第一档：1~10kg——在该范围内对应的重量将乘以1.2
                        </li>
                        <li>
                            第二档：10~20kg——在该范围内对应的重量将乘以1.4
                        </li>
                        <li>
                            第三档：20kg——在该范围内对应的重量将乘以1.8
                        </li>
                    </ul>
                    <h4>日用品</h4>
                    <ul>
                        <li>
                            第一档：1~5kg——在该范围内对应的重量将乘以1
                        </li>
                        <li>
                            第二档：5~10kg——在该范围内对应的重量将乘以1.2
                        </li>
                        <li>
                            第三档：10kg——在该范围内对应的重量将乘以1.4
                        </li>
                    </ul>
                    <h3>
                        积分规则设计理由：
                        <br/>
                        衣服与书籍类需求较大，奖励比例会更大，激励更多用户参与。
                        <br/>
                        家具类因为重量相较其他种类会更大比例，一次的回收效率更大，奖励的比例有响应的增加
                    </h3>
                </div>
            </Collapse.Panel>
            </Collapse>
        </div>
    );
};

export default Knowlege;