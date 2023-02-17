import { useLocation } from "react-router-dom";

const useFetAddress = ()=>{
    const x = useLocation()
    return x
}

export default useFetAddress;