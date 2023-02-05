import React, { useRef, useState } from 'react';
import {login} from '../../store/reducer/authSlice'
import {store} from '../../store/index'
import axios from 'axios';
import {signIn} from '../../store/api/register'
import { useNavigate } from 'react-router-dom';

//登录注册页面
const Author = () => {
    //登录true，注册false
    const [isLogin, setIsLogin] = useState(true)

    // const [regFn, {error:regError}] = useRegisterMutation()
    const numberInf = useRef()
    const pwdInf = useRef()
    
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        
        const username = numberInf.current.value
        const password = pwdInf.current.value
        if(isLogin){
            console.log('登录-->', username, password)
            let params = {
                username:username,
                password:password,
            }
            let url = 'http://localhost:3001/api/login'
            return new Promise((resolve,reject) => {
                axios({
                      method:'post',
                      url:url,
                      data:params,
                      headers:{'Content-Type':'application/x-www-form-urlencoded'}
                  })
                .then((res) => {
                      resolve( res );
                      store.dispatch(login({
                          token:res.data.token,
                          data:res.data.data,
                      }))
                      navigate('/',{replace:true})
                      console.log(res)
                  })
                .catch((error) => {
                      reject( error );
                      console.log(error)
                  });
              })
        }else{
            console.log('注册-->',username, password)
            
            let params = {
                username:username,
                password:password,
            }
            signIn(params)
        }
    }
    return (
        <div>
            <h3>{isLogin? "登录":"注册"}</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={numberInf} type="text" placeholder={"账号"}/>
                </div>
                <div>
                    <input ref={pwdInf} type="password" placeholder={"密码"}/>
                </div>
                <div>
                    <button>{isLogin? "登录":"注册"}</button>
                    <a href='#' onClick={e => {
                            //取消点击默认行为
                            e.preventDefault();
                            //更改状态值
                            setIsLogin(prevState => !prevState)
                        }
                    }>{
                        isLogin? "没有账号，点击注册":"已有账号，点击登录"
                    }</a>
                </div>
            </form>
        </div>
    );
};

export default Author;