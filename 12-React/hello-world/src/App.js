import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      {/* Self closing tag */}
      <Welcome />
      <Hello name="Bruce Wayne" />
      <Greet firstName="Ninja" lastName="Hattori">
        <p> This is children props </p>
        <button>Submit</button>
      </Greet>
      <Welcome name="SpiderMan"></Welcome>
      <Message />
    </div>
  );
}

export default App;
