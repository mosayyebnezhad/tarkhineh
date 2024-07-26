import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';

import './Data/index.scss';
import { BrowserRouter } from 'react-router-dom';
import Loading from './Components/Loading/Loading';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const Main = () => {





  const OtherComponent = React.lazy(() => import('./App'));
  return (
    <React.StrictMode>
      <BrowserRouter>


        <Suspense fallback={<h1><Loading />~</h1>}>

          <OtherComponent />    {/* this is app */}
        </Suspense>
  

      </BrowserRouter>

    </React.StrictMode>
  )
}


root.render(
  <Main />
);


reportWebVitals();



