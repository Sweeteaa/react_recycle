import React from 'react';
import Go from '../../../../components/Go/Go';
import { Image } from 'antd-mobile';

const Handle = () => {
    return (
        <div>
            <Go/>
            <div>
                <Image
                    src={'https://ts1.cn.mm.bing.net/th/id/R-C.c4ab1b9d9524f235807fcbd5fe8b7e94?rik=ekhHigS9HXKcGg&riu=http%3a%2f%2fres.tyrbw.com%2fdata1%2f1%2fimages%2f2021%2f0819%2f16293807926711000_1122x631.jpg&ehk=swh4JAkRelkayklumn0hhteAP%2f92vND1uT70VDP6QXE%3d&risl=&pid=ImgRaw&r=0'}
                    width={'750rem'}
                    height={'400rem'}
                    fit={"cover"}
                />
            </div>
            <div>
                处理方式
            </div>
        </div>
    );
};

export default Handle;