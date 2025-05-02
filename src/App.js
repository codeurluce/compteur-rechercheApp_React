// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
function App() {

  const [count, setCount] = useState(0);
 

  function add(){
    setCount (count+1)
  }
  function remove(){
    setCount (count-1)
  }
  return (
    <div className='App'>
      <h1>Compteur</h1>
      <Counter>{count}</Counter>
      <Counter />
      <Button click={remove} content="-"/>
      <Button click={add} content="+"/>

    </div>
  )
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
