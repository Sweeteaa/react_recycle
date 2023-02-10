import { createHashHistory } from "history";
import { LeftOutline } from "antd-mobile-icons";
import classes from './Go.module.css'

const Go = () => {
    const history = createHashHistory({window});

    const backHandle = ()=>{
         history.go(-1)
    }

    return (
        <div>
            <div onClick={backHandle} className={classes.back}><LeftOutline fontSize={'40rem'} /></div>
        </div>
    );
};

export default Go;