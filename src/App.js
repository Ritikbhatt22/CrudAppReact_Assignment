import logo from './logo.svg';
import './App.css';
import Register from "./components/Register"
import Login from "./components/Login"
import Blogs from "./components/Blogs"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div> 
        <Switch>
  
          <Route exact path="/"  component={Register} />
          <Route path="/login"  component={Login} /> 
          <Route path="/blogs"  component={Blogs} />

        </Switch>
      </div>
    </Router>
      {/* <Login/> */}
    </div>
  );
}

export default App;
