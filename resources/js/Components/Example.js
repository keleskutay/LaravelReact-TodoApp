import {React} from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Nav";
import TodoWindow from "./TodoWindow";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
   <div>
     <Nav/>
     <TodoWindow/>
   </div>
  );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
