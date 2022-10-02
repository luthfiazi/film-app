import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';

import 'semantic-ui-css/semantic.min.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const stateFilm = {
  tes : 'test redux'
}

const reducerFilm = (state=stateFilm) => {
  return state
}

const store =createStore(reducerFilm)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode> 
);
