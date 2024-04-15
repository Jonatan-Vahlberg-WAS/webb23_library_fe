import { Outlet, Link } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <Link to="/">
            <h1>Library</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default RootLayout;
