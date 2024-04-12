import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import RootLayout from './routes/Root';
import Home from './routes/Home';
import Login from './routes/Login';

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
      }
    ]

  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
