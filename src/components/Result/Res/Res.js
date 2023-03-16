import React from 'react';
import { ResultPage } from 'antd-mobile';
// import classes from './Success.module.css';
import { useNavigate } from 'react-router-dom';

const Res = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ResultPage
                status='success'
                title='操作成功'
                description='您的换购订单已成功提交！可以在换购界面查看订单进度'
                style={{'--background-color':'cadetblue','--adm-color-primary':'cadetblue'}}
                secondaryButtonText='返回主页'
                onSecondaryButtonClick={() => navigate('/home',{replace:true})}
                primaryButtonText='查看订单'
                onPrimaryButtonClick={() => navigate('/use/main/nogo',{replace:true})}
            />
        </div>
    );
};

export default Res;