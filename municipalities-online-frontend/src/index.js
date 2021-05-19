import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/i18next';
import { BrowserRouter } from 'react-router-dom';
import { IdxSpinner } from './UI/Spinners/LdsSpinner/IdxSpinner';
import store from './store';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

ReactDOM.render(
  <Suspense fallback={<IdxSpinner />}>
    <Provider store={store}>
      <ErrorBoundry>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundry>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
