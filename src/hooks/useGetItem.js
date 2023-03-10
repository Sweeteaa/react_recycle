import { useLocation } from "react-router-dom";

const useFetItem = ()=>{
    const x = useLocation()
    return x
}

export default useFetItem;