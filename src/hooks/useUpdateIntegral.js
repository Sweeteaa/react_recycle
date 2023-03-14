// import { useSelector } from 'react-redux';
// import { store } from '../store';
// import { update } from '../store/reducer/authSlice';
// import { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';

// const useUpdateIntedral = ()=>{
//     //创建一个useEffect，用来处理登录状态
//     const auth = useSelector(state => state.auth)

//     const [list, getList] = useState([])

//     const fetchData = useCallback(async () => {
//         await axios({
//             method:'get',
//             url:`http://127.0.0.1:3001/user/getInfo/${auth.data.username}`,
//             // data:{id:x.state.id},
//         }).then((res) => {
//             // console.log('res', res.data.data);
//             getList(res.data.data)
//         });
//     },[auth])

//     useEffect(()=>{
//         fetchData(),
//         store.dispatch(update(list[0].Integral))
//     },[fetchData])
// }

// export default useUpdateIntedral;