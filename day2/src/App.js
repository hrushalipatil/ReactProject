import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import Inline from './components/InlineStyle';
import  './components/Appstyle.css';
import  x  from './components/Appstyle.module.css'

function App() {
  return (
    <div className="App">

      {/* <h1  className='django'>APP STYLE CSS</h1> */}
      <h1  className={x.pink}>REACTJS</h1>

        {/* <Inline></Inline> */}
       
       <Stylesheet name = "two"/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
