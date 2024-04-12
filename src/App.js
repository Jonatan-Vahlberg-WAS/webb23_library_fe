import logo from './logo.svg';
import './App.css';

function App() {
  fetch(process.env.REACT_APP_BACKEND_URL+"/api/v1/authors")
    .then(response => {
      response.json()
      .then(response => {
        console.log("Resp", response)
        }) 
    })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
