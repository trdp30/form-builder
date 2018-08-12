import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import 'react-power-select/dist/react-power-select.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
