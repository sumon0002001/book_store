import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './style/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initState = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'The Hunger Games',
      category: 'Action',
    },

    {
      id: Math.floor(Math.random() * 10),
      title: 'Dune',
      category: 'Science Fiction',
    },

    {
      id: Math.floor(Math.random() * 10),
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
    },

  ],
  filter: '',
};

const store = createStore(rootReducer, initState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
