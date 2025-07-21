import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { Offers } from './utils/Offers';
import { Help } from './utils/Help';
import { Cart } from './utils/Cart';
import { Error } from './utils/Error';
import Body from './utils/Body';
import { RestaurantMenu } from './utils/RestaurantMenu';
import Memo from './utils/Memo.jsx';

// import {RouterProvider, createBrowserRouter} from 'react-router-dom'; 
import {RouterProvider, createHashRouter} from 'react-router-dom'; 

// import Login from './utils/Login.jsx';

// const appRouter = createBrowserRouter([
const appRouter = createHashRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Error />,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/offers',
        element : <Offers />
      },

      {
        path : '/help',
        element : <Help />
      },
      {
        path : '/cart',
        element : <Cart />
      },
      {
        path: '/restaurant/:resId',
        element : <RestaurantMenu />
      },
      {
        path : '/memo',
        element:<Memo />
      }
    ]
  }
  // {
  //   path : '/userlogin',
  //   element : <Login />
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();