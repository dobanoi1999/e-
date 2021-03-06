import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyle from './globalCss';
import store from './redux/store';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


