import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MailList from './components/MailBox/MailList';
import MailBody from './components/MailBox/MailBody';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
       <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={MailList} />
          <Route path="/body" exact component={MailBody} />
        </Switch>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
