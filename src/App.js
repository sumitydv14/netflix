import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Deshboard from './Component/Deshboard/Deshboard';

function App() {
  return (
    <div className="App">
       <Router>
           <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sign" component={Signup}/>
                <Route exact path="/deshboard" component={Deshboard}/>
           </Switch>
       </Router>
    </div>
  );
}

export default App;
