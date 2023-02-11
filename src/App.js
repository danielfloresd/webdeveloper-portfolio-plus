import AppFooter from './components/AppFooter';
// import './App.css';

import AppNavBar from './components/AppNavBar';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <header>
        <AppNavBar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
  className = "App-link"
  href = "https://reactjs.org"
  target = "_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <AppFooter />
      </main>
    </div>
  );
}

export default App;
