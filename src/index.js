import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error404 from './views/Error404';
import Wallets from './views/Wallets';
import reportWebVitals from './reportWebVitals';
import Connect from './views/connect';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>
  },
  {
    path: "/Wallets",
    element: <Wallets/>,
    errorElement: <Error404/>
  },
  {
    path: "/connect/:wallet",
    element: <Connect/>,
    errorElement: <Error404/>
  },
 
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
