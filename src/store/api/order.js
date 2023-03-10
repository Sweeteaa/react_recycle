//新增订单http.post请求
import http from './index'

function addOrder(data){
    let baseURL = 'http://localhost:3001/user/order/addOrder'
    http.post(baseURL,data)
}

function getOrder(data){
    let baseURL = 'http://localhost:3001/user/order/getOrder'
    http.post(baseURL,data)
}


export{
    addOrder,
    getOrder
}