import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from './Components/Login';



function App() {
  return (
    // <Router >
    //   <Route exact path='/'>
    <div className="App m-5 container  row">
      <div className="col-3"></div>
      <div className="col bg-dark text-white">
        <AddTask />
        <ListTask />
      </div>
      <div className="col-3"></div>
    </div>
    /* </Route>
    <Route path='/login' component={Login} />
  </Router> */
  );
}

export default App;
