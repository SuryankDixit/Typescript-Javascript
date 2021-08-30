import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParenctComponent from './components/ParentComponent'

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
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParenctComponent />
    </div>
  );
}

export default App;
