import React from 'react';
import Go from '../../../../components/Go/Go';
import { Image } from 'antd-mobile';
import classes from './RecycleGo.module.css'

const RecycleGo = () => {
    return (
        <div>
            <Go/>
            <div className={classes.main}>
                <h2 className={classes.top}>回收去向</h2>
                <div>
                    <Image
                        src={'https://bpic.588ku.com/element_origin_min_pic/19/06/18/f92d81164e7fb26fdef8694cf4fee1bf.jpg'}
                        width={'620rem'}
                        height={'320rem'}
                        fit={"cover"}
                    />
                </div>
                <h2>公益捐赠</h2>
                <div className={classes.word}>部分成色良好具有比较高使用价值的旧衣物，经清洗消毒后捐赠至有需要的贫困山区或公益个人。会组织公益行活动，同志愿者前往贫困山区关爱山区孩子并为山区孩子们献上我们的爱心。</div>
                <h2>出口第三世界</h2>
                <div className={classes.word}>部分较新、质量品相过关的夏装衣物会通过集中处理，清洗消毒后交给有渠道的外贸公司出口或捐赠到非洲或是东南亚落后地区以此改善帮助他们的生活为平台赚取费用。</div>
                <h2>环保再生</h2>
                <div className={classes.word}>剩下的部分无法再次穿着的衣物将会根据面料的不同分类，在再生工厂中通过开松、分梳等方式分离出再生的棉毛、涤纶、晴纶等面料重新制成环保袋、靠垫等工农业材料。</div>
            </div>
        </div>
    );
};

export default RecycleGo;