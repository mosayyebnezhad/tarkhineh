// import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';

import './Data/index.scss';
import { BrowserRouter } from 'react-router-dom';
// import Loading from './Components/Loading/Loading';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const Main = () => {





  // const OtherComponent = React.lazy(() => import('./App'));

  // replace by App
  // <Suspense fallback={<h1><Loading />~</h1>}>

  //         <OtherComponent />    {/* this is app */}
  //    //   </Suspense> 

  return (
    <React.StrictMode>
      <BrowserRouter>
 

        <App />


      </BrowserRouter>

    </React.StrictMode>
  )
}


root.render(
  <Main />
);


reportWebVitals();



