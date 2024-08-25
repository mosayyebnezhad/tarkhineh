import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';

import './Data/index.scss';
import { BrowserRouter } from 'react-router-dom';
// import Loading from './Components/Loading/Loading';
import App from './App';
import { CookiesProvider } from 'react-cookie';

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

      <BrowserRouter>

        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <App />
        </CookiesProvider>

      </BrowserRouter>


  )
}


root.render(
  <Main />
);
console.log(process.env.NODE_ENV)

reportWebVitals();



