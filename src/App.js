import logo from "./logo.svg";
import "./App.css";

// import Header from "./components/Header";

import AppNavBar from "./components/AppNavBar";
import AppFooter from "./components/AppFooter";
import AppGrid from "./components/AppGrid";


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
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      {/* <Container> */}
      <main>
        <AppGrid />
      </main>
      {/* </Container> */}
      <AppFooter />
    </div>
  );
}

export default App;
