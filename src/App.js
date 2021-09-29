import React from "react"
import Home from "./Home"
import { Switch,Route ,Redirect} from "react-router"
import Service from "./Service"
import Contact from "./Contact"
import About from "./About"
import Navbar from "./Navbar"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer"
const App=()=>{
  return(
    <>
    <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Redirect to="/"/>
        </Switch>
        <br/> <br/><br/><br/>
        <Footer />
    </>
  )
} 

export default App;