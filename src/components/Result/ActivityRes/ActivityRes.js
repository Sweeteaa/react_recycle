import React from 'react';
import { ResultPage, Card } from 'antd-mobile';
import { HeartFill } from 'antd-mobile-icons';
import classes from './ActivityRes.module.css';
import { useNavigate } from 'react-router-dom';

const ActivityRes = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ResultPage
                status='success'
                title='操作成功'
                description='成功参与活动！'
                style={{'--background-color':'cadetblue','--adm-color-primary':'cadetblue'}}
                secondaryButtonText='返回主页'
                onSecondaryButtonClick={() => navigate('/home',{replace:true})}
                primaryButtonText='查看订单'
                onPrimaryButtonClick={() => navigate('/mine/activitymsg',{replace:true})}
            >
                <Card style={{ height: '168rem', marginTop: '12rem', fontSize:'50rem'}} className={classes.card}>
                    <HeartFill fontSize={42} color='#cb3a56'/> 感谢您的积极参与！
                </Card>    
            </ResultPage>
        </div>
    );
};

export default ActivityRes;