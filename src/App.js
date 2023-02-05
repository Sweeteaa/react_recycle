import './App.css';
import RouteConfig from './routes/route'
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react'

function App() {
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
