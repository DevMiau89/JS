import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clicker, CardList} from './Clicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
                <Clicker />
                <CardList />
                </div>, 
                document.getElementById('root')
);

registerServiceWorker();
