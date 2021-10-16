import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginC from "./Components/LoginC";
import AdminC from "./Components/AdminC";
import LogoutC from "./Components/LogoutC";
import Navbar from './Components/Navbar'


class App extends Component {
  render() {
    return (
      <>
    {/* <AdminC/> */}
     
          <Router>
            
            <Navbar/>
          <Switch>
            <Route exact path="/loginC" component={LoginC} /> 
            <Route path="/AdminC" component={AdminC} />
            <Route  path="/LogoutC" component={LogoutC} /> 
            
            
          </Switch> 
       </Router>  
      </> 
    );
  }
}

export default App;
