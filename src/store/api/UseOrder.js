//新增订单http.post请求
import http from './index'

function addUseOrder(data){
    let baseURL = 'http://localhost:3001/user/items/addUseOrder'
    http.post(baseURL,data)
}

function getUseOrder(data){
    let baseURL = 'http://localhost:3001/user/items/getUseOrder'
    http.post(baseURL,data)
}



export{
    addUseOrder,
    getUseOrder,
}