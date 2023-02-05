import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store'
import { Provider } from 'react-redux';

//移动端适配
document.documentElement.style.fontSize = 100 / 750 + 'vw'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      
      <Provider store={store}>  
      <React.StrictMode>      
                  <App />
      </React.StrictMode>
      </Provider>
);
