import React, { useRef, useState } from 'react';
import classes from './Author.module.css'
import {login} from '../../store/reducer/authSlice'
import {store} from '../../store/index'
import axios from 'axios';
import {signIn} from '../../store/api/register'
import { useNavigate } from 'react-router-dom';
import Back from '../../components/Back/Back';
import Lottie from 'lottie-react';
import welcome from '../../assets/ae/welcome.json'
import signup from '../../assets/ae/signup.json'
import { Toast } from 'antd-mobile';

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
                      if(res.data.status !== 1){
                            Toast.show({
                                icon: 'success',
                                content: '登录成功！',
                            })
                            store.dispatch(login({
                                token:res.data.token,
                                data:res.data.data,
                            }))
                            navigate('/',{replace:true})
                      }else{
                            Toast.show({
                                icon: 'fail',
                                content: '登录失败！',
                            })
                      }
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
                Integral:0
            }
            let params1 = {
                username:username,
                password:password,
            }
            return new Promise((resolve,reject) => {
                    axios({
                        method:'post',
                        url:'http://localhost:3001/api/signIn',
                        data:params,
                        headers:{'Content-Type':'application/x-www-form-urlencoded'}
                    })
                    .then((res) => {
                        resolve( res );
                        if(res.data.message === '注册成功！'){
                            Toast.show({
                                icon: 'success',
                                content: '注册成功！即将跳转~',
                            })
                            return new Promise((resolve,reject) => {
                                axios({
                                        method:'post',
                                        url:'http://localhost:3001/api/login',
                                        data:params1,
                                        headers:{'Content-Type':'application/x-www-form-urlencoded'}
                                    })
                                .then((res) => {
                                    resolve(res)
                                    store.dispatch(login({
                                        token:res.data.token,
                                        data:res.data.data,
                                    }))
                                        navigate('/',{replace:true})
                                    })
                                .catch((error) => {
                                        reject( error );
                                        console.log(error)
                                    });
                                })
                        }else if(res.data.message === '该账户名已被注册'){
                                Toast.show({
                                    icon: 'fail',
                                    content: '账户已被注册！',
                                })
                        }
                        console.log('res',res)
                    })
                    .catch((error) => {
                        reject( error );
                        Toast.show({
                            icon: 'fail',
                            content: '密码需满足6位！',
                        })
                        // console.log(error)
                  });
              })
        }
    }
    return (
        <div className={classes.main}>
            <Back/>
            {
                isLogin?
                <Lottie animationData={signup} loop={true} style={{ height: '250rem', width: '700rem', backgroundColor:'#F0FFF0',margin:'50rem 30rem'}}/>:
                <Lottie animationData={welcome} loop={true} style={{ height: '250rem', width: '700rem', backgroundColor:'#F0FFF0',margin:'50rem 30rem'}}/>
            }
                
            
            <h2 className={classes.title}>{isLogin? "登录即可参与旧物回收!":"快捷注册参与活动~"}</h2>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.name}>
                    <div>账号</div>
                    <input ref={numberInf} type="text"/>
                </div>
                <div className={classes.psw}>
                    <div>密码</div>
                    <input ref={pwdInf} type="password"/>
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