import React from 'react';
import Go from '../../../../components/Go/Go';
import { Image } from 'antd-mobile';

const RecycleGo = () => {
    return (
        <div>
            <Go/>
            <div>
                <Image
                    src={'https://bpic.588ku.com/element_origin_min_pic/19/06/18/f92d81164e7fb26fdef8694cf4fee1bf.jpg'}
                    width={'750rem'}
                    height={'400rem'}
                    fit={"cover"}
                />
            </div>
            <div>
                回收流程
            </div>
        </div>
    );
};

export default RecycleGo;