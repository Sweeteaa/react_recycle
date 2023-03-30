import { Image } from 'antd-mobile';
import React from 'react';
import Go from '../../../../components/Go/Go';
import classes from './RecycleStep.module.css'

const RecycleStep = () => {
    return (
        <div>
            <Go/>
            <div className={classes.main}>
                <h2 className={classes.top}>回收流程</h2>
                <div>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.993daeab232363e73c8f41ff3931c18f?rik=mQS5cBne7lDJGw&riu=http%3a%2f%2fwww.shrsen.com%2fUploads%2f2018-02-08%2f5a7bc30783097.jpg&ehk=nWBnfpigbo2Ny6l6%2fByUvefuLG0kFfzPXISP3dIte3M%3d&risl=&pid=ImgRaw&r=0'}
                        width={'620rem'}
                        height={'320rem'}
                        fit={"cover"}
                    />
                </div>
                <h2>回收预约</h2>
                <div className={classes.word}>点击旧衣回收服务。填写自己的地址，选择回收小哥上门的时间，预估衣物、书籍的重量选择适合的档次，最后确认提交，这样就完成了预约上门这一步啦，接下来就是静静的等待上门取件啦。</div>
                <h2>物流取件</h2>
                <div className={classes.word}>快递小哥取件后，会收进回收点后确认您的回收衣物重量，反馈到应用，确认您的奖励，并且给到你一个单号，你可以通过快递查询，跟踪物流进度噢。</div>
                <h2>其他活动</h2>
                <div className={classes.word}>除了直接下单回收衣服外，也可以选择参与各种旧衣回收活动。</div>
            </div>
        </div>
    );
};

export default RecycleStep;