import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';


import AppRouter from './router/AppRouter';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
