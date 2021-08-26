import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import { createBrowserHistory } from "history"; 
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import store from "./redux/store";

import HomePage from './views/HomePage/HomePage';
import Header from './components/Header/Header';
import ProfilePage from './views/ProfilePage/ProfilePage';
import AddPost from './views/AddPost/AddPostPage';


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Provider store={store}>
      <div style={{minHeight:"100vh", backgroundColor:"#f4f4f4"}}> 
        <CssBaseline />
        <Header />


        <Switch>
          
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/me">
            <ProfilePage />
          </Route>

          <Route exact path="/add-post">
            <AddPost />
          </Route>

          <Route exact path="/profile/:id">
            <ProfilePage />
          </Route>
          

        </Switch>
      </div>

    </Provider>
  </Router>,
  document.getElementById('root')
);
