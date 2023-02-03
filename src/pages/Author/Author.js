import React from 'react';

const Author = () => {
    return (
        <div>
            登录/页面
            <form>
                <div>
                    <input type="text" placeholder={"用户名"}/>
                </div>
                <div>
                    <input type="password" placeholder={"密码"}/>
                </div>
                <div>
                    <button>登录</button>
                </div>
            </form>
        </div>
    );
};

export default Author;