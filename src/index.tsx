import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import './assets/css/main.css';
import { reactQueryConfig } from './Config';
import { RedeemPage } from './pages/redeem';

ReactDOM.render(
  <StrictMode>
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <RedeemPage />
    </ReactQueryConfigProvider>
  </StrictMode>,
  document.getElementById('root')
);
