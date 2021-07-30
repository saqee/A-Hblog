
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import './main.scss'
import Store from './store/index'
import Dashboard from "./components/Dashboard";
import PrivateRoutes from './private/PrivateRoutes'
import NotFound from "./components/NotFound";
import RouteLinks from "./private/RouteLinks";
import Create from "./components/Create";
import EditImage from "./components/EditImage";
import UserName from "./components/UserName";
import Details from "./components/Details";
function App() {
  return ( 
    <Provider store={Store}>
<Router>
   <Navbar></Navbar>
  <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/home/:page" exact component={Home}/>
         <Route path="/details/:id" exact component={Details}/>
          <RouteLinks  path="/login" exact  component={Login}/>
          <RouteLinks   path="/register"  exact component={Register}/>
          <PrivateRoutes path="/dashboard/:page?" exact  component={Dashboard}/>
          <PrivateRoutes path="/edit/:id" exact  component={Edit}/>
          <PrivateRoutes path="/username" exact  component={UserName}/>
          <PrivateRoutes path="/updateImage/:id" exact  component={EditImage}/>
          <PrivateRoutes path="/create" exact component={Create}/>
       
  </Switch>
</Router>
</Provider>
  );
}

export default App;
