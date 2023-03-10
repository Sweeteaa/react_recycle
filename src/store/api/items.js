import http from './index'

// function add(data){
//     let baseURL = 'http://localhost:3001/user/address/addAddress'
//     http.post(baseURL,data)
// }

function get(){
    let baseURL = 'http://localhost:3001/user/items/getCate'
    http.get(baseURL)
}

export{
    get
}