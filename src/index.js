import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Screens/home-sections/homeScreen';
import ItemsGridHome from "./Screens/code/itemsGridHome.js"
import CodeDetails from "./Screens/code/codeDetails.js"

import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UploadScreen from './Screens/upload/uploadScreen';
import CategoryCode from './Screens/code/CategoryCode';
import LoginRegister from './Screens/Authentication/loginRegister';
import UserProfileAuth from './Screens/Authentication/specialRedirects/UserprofileAuth';
import RedirectBackHome from './Screens/Authentication/specialRedirects/RedirectBackHome';
import WaitingToVerify from './components/waitingToVerify';
import TermsOfUseComponent from './documents/TermsOfUse';
import UserProfile from "./Screens/code/UserProfile.js"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
     <Route exact path="/" component ={Home}></Route> 
     <Route exact path="/widgets" component={ItemsGridHome}></Route>
     <Route path="/widgets/:name/:id" component={CodeDetails}></Route>
     <Route path="/upload" component={UploadScreen}></Route>
     <Route path="/verify" component={WaitingToVerify}></Route>
     <Route path="/auth" component={LoginRegister}></Route>
     <Route path="/profile-auth" component={UserProfileAuth}></Route>
     <Route path="/user-auth" component={RedirectBackHome}></Route>
     <Route path="/terms-of-use" component={TermsOfUseComponent}></Route>
     <Route path="/user-profile" component={UserProfile}></Route>
     <Route component={CategoryCode}></Route>
     </Switch>     
    </Router>

    
  </React.StrictMode>,
  document.getElementById('root')
);

