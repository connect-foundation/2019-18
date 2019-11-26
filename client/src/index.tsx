import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer);
ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'),
);
