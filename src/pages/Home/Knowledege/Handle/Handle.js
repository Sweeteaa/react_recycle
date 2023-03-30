import React from 'react';
import Go from '../../../../components/Go/Go';
import { Image } from 'antd-mobile';
import classes from './Handle.module.css'

const Handle = () => {
    return (
        <div>
            <Go/>
            <div className={classes.main}>
                <h2 className={classes.top}>处理方式</h2>
                <div>
                    <Image
                        src={'https://ts1.cn.mm.bing.net/th/id/R-C.c4ab1b9d9524f235807fcbd5fe8b7e94?rik=ekhHigS9HXKcGg&riu=http%3a%2f%2fres.tyrbw.com%2fdata1%2f1%2fimages%2f2021%2f0819%2f16293807926711000_1122x631.jpg&ehk=swh4JAkRelkayklumn0hhteAP%2f92vND1uT70VDP6QXE%3d&risl=&pid=ImgRaw&r=0'}
                        width={'620rem'}
                        height={'320rem'}
                        fit={"cover"}
                    />
                </div>
                <h2>有价废弃物</h2>
                <div className={classes.word}>按照每个投料拆箱批次整理转运一次，转运到原材料库统一规划的废弃物存放区，废纸箱按存放到硬纸板区域、废木箱存放到临时放置区。</div>
                <h2>无价废弃物</h2>
                <div className={classes.word}>装在垃圾袋及编织袋内的废弃物，转运前需将垃圾袋的袋口扎紧，粘贴废弃物标识，按照《废弃物分类处理表》中存放时间进行清理，换班前完成，废弃物统一转运到原材料库的垃圾存放区按照垃圾分类标识进行分类存放。</div>
                <h2>危险废弃物</h2>
                <div className={classes.word}>拆下的包装，扎紧吨包袋袋口，确保不会有粉料泄露后将废弃物放在托盘上，贴上废弃物标签后，及时转运到原料库内垃圾存放区域的包装袋放置区（禁止将液体浆料倾倒入吨包袋内）。</div>
            </div>
        </div>
    );
};

export default Handle;