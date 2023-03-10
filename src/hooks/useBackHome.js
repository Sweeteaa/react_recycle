import { useNavigate } from "react-router-dom";

const useBackHome = ()=>{
    const navigate = useNavigate()
    navigate('/',{replace:true})
}

export default useBackHome;