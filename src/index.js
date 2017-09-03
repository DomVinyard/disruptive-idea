import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'     
import fonts from './fonts.js'

import WebFont from 'webfontloader'



WebFont.load({
  google: {
    families: fonts
  },
  active: () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  }
})
