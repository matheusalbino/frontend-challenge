import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import './assets/css/main.css';
import { reactQueryConfig } from './Config';
import { ResgatePage } from './pages/resgate';

ReactDOM.render(
  <StrictMode>
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <ResgatePage />
    </ReactQueryConfigProvider>
  </StrictMode>,
  document.getElementById('root')
);
