import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Popup trigger={<button>Trigger</button>}  />, document.getElementById('root') );
Popup.alert('Hello');
registerServiceWorker();
