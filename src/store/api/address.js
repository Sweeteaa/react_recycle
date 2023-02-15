import http from './index'

function add(data){
    let baseURL = 'http://localhost:3001/user/address/addAddress'
    http.post(baseURL,data)
}

function get(data){
    let baseURL = 'http://localhost:3001/user/address/getAddress'
    http.get(baseURL,data)
}

export{
    add,
    get
}