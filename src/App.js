import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import RootLayout from './routes/Root';
import Home from './routes/Home';
import Login from './routes/Login';
import { useEffect } from 'react';
import localStorageKit from './util/LocalStorageKit';
import Register from './routes/Register';
import AdminBooks from './routes/admin/Books';

const router  = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/admin",
        children: [
          {
            path: "/admin/books",
            element: <AdminBooks/>

          }
        ]
      }
    ]

  }
])

function App() {
  useEffect(() => {
    localStorageKit.getTokenFromStorage()
  },[])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
