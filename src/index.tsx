import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/global/ErrorPage';
import Enterprise from './pages/Enterprise';
import Documents, { loader as documentsLoader } from './pages/Documents';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:clientId",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:clientId",
        element: <Enterprise />,
      },
      {
        path: "documents/:enterpriseId",
        element: <Documents />,
        loader: documentsLoader
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
