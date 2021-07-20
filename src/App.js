import './App.css';
import Projects from './components/projects/projects';
import Home from './components/home/home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
