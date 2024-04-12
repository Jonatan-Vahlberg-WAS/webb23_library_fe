import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import RootLayout from './routes/Root';

const router  = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <h2>home</h2>
      },
      {
        path: "/login",
        element: <h2>login</h2>
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
