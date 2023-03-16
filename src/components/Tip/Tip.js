import { Image } from 'antd-mobile';
import React from 'react';
import classes from './Tip.module.css'

const Tip = () => {
    return (
        <div className={classes.main}>
            <div className={classes.module}>
                <div>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.993daeab232363e73c8f41ff3931c18f?rik=mQS5cBne7lDJGw&riu=http%3a%2f%2fwww.shrsen.com%2fUploads%2f2018-02-08%2f5a7bc30783097.jpg&ehk=nWBnfpigbo2Ny6l6%2fByUvefuLG0kFfzPXISP3dIte3M%3d&risl=&pid=ImgRaw&r=0'}
                        width={'170rem'}
                        height={'100rem'}
                        fit={"cover"}
                        style={{borderRadius:'20rem'}}
                    />
                </div>
                <div>回收流程</div>
            </div>
            <div className={classes.module}>
                <div>
                    <Image
                        src={'https://bpic.588ku.com/element_origin_min_pic/19/06/18/f92d81164e7fb26fdef8694cf4fee1bf.jpg'}
                        width={'170rem'}
                        height={'100rem'}
                        fit={"cover"}
                        style={{borderRadius:'20rem'}}
                    />
                </div>
                <div>回收去向</div>
            </div>
            <div className={classes.module}>
            <div>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.c4ab1b9d9524f235807fcbd5fe8b7e94?rik=ekhHigS9HXKcGg&riu=http%3a%2f%2fres.tyrbw.com%2fdata1%2f1%2fimages%2f2021%2f0819%2f16293807926711000_1122x631.jpg&ehk=swh4JAkRelkayklumn0hhteAP%2f92vND1uT70VDP6QXE%3d&risl=&pid=ImgRaw&r=0'}
                        width={'170rem'}
                        height={'100rem'}
                        fit={"cover"}
                        style={{borderRadius:'20rem'}}
                    />
                </div>
                <div>处理方式</div>
            </div>
        </div>
    );
};

export default Tip;