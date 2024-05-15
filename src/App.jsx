import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import axios from '@/helpers/axios';
import store from '@/states/store';

import Router from './Router';

axios.initialize();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
