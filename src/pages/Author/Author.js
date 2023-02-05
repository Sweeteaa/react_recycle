import React, { useRef, useState } from 'react';
import classes from './Author.module.css'
import {login} from '../../store/reducer/authSlice'
import {store} from '../../store/index'
import axios from 'axios';
import {signIn} from '../../store/api/register'
import { useNavigate } from 'react-router-dom';
import { LeftOutline } from 'antd-mobile-icons'
import { Link } from 'react-router-dom';

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
        <div className={classes.main}>
            <Link to='/' className={classes.back}><LeftOutline fontSize={'40rem'} /></Link>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.name}>
                    <input ref={numberInf} type="text" placeholder={"账号"}/>
                </div>
                <div className={classes.psw}>
                    <input ref={pwdInf} type="password" placeholder={"密码"}/>
                </div>
                <div>
                    <button className={classes.btn}>{isLogin? "登录":"注册"}</button>
                </div>
                <div>
                    <a href='#' className={classes.sign} onClick={e => {
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