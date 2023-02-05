//调用axios

import axios from "axios";


let http ={
    post: function(url,params){
        params = params || {};
        return new Promise((resolve,reject) => {
          axios({
                method:'post',
                url:url,
                data:params,
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
          .then((res) => {
                resolve( res );
                console.log(res)
            })
          .catch((error) => {
                reject( error );
                console.log(error)
            });
        })
    },

    get: function(url,params){
        params = params || {};
        return new Promise((resolve, reject)=>{
            axios({
                method:'get',
                url:url,
                data:params,
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
            .then((res)=>{
                resolve(res);
                console.log(res);
            })
            .catch((error)=>{
                reject(error);
                console.log(error);
            })
        })
    }
}

export default http;