import React from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import './index.css';
import { BrowserRouter } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
       <App/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
