import React from 'react';
import { ResultPage, Card } from 'antd-mobile';
import { HeartFill } from 'antd-mobile-icons';
import classes from './Success.module.css';
import { useNavigate } from 'react-router-dom';

const Sueecss = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ResultPage
                status='success'
                title='操作成功'
                description='您的回收订单已成功提交！可以在我的界面查看订单详细信息'
                style={{'--background-color':'cadetblue','--adm-color-primary':'cadetblue'}}
                secondaryButtonText='返回主页'
                onSecondaryButtonClick={() => navigate('/home',{replace:true})}
                primaryButtonText='查看订单'
                onPrimaryButtonClick={() => navigate('/mine/logistics/no-recycle',{replace:true})}
            >
                <Card style={{ height: '168rem', marginTop: '12rem', fontSize:'40rem'}} className={classes.card}>
                    <HeartFill fontSize={42} color='#cb3a56'/> 感谢您为环保事业贡献力量！
                </Card>    
            </ResultPage>
        </div>
    );
};

export default Sueecss;