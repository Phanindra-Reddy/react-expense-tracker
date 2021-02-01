import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from './context/Context';
import {SpeechProvider} from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="f56d3d57-27ab-4a1a-b5e1-ad75f7bb38e8" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

