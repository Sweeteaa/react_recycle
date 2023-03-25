import { Image } from 'antd-mobile';
import React from 'react';
import Go from '../../../../components/Go/Go';

const RecycleStep = () => {
    return (
        <div>
            <Go/>
            <div>
                <Image
                    src={'https://ts1.cn.mm.bing.net/th/id/R-C.993daeab232363e73c8f41ff3931c18f?rik=mQS5cBne7lDJGw&riu=http%3a%2f%2fwww.shrsen.com%2fUploads%2f2018-02-08%2f5a7bc30783097.jpg&ehk=nWBnfpigbo2Ny6l6%2fByUvefuLG0kFfzPXISP3dIte3M%3d&risl=&pid=ImgRaw&r=0'}
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

export default RecycleStep;