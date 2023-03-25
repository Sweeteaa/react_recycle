import React from 'react';
import { ResultPage } from 'antd-mobile';
// import classes from './Success.module.css';
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
            />
        </div>
    );
};

export default ActivityRes;