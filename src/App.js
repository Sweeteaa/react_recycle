import './App.css';
import RouteConfig from './routes/route'
import { BrowserRouter } from 'react-router-dom';
import { Suspense, useEffect } from 'react'
import useAutoLogout from './hooks/useAutoLogout';
import useUpdateIntedral from './hooks/useUpdateIntegral';

function App() {
  //创建一个useEffect，用来处理登录状态
  useAutoLogout();
  // useUpdateIntedral();
  return (
    <div className="App">
        <BrowserRouter>
            <Suspense fallback={<div>loading...</div>}>
              <RouteConfig />
            </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
