import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Archiver from './components/Archiver';
import ArchiveBody from './components/ArchiveBody'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
       <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={Archiver} />
          <Route path="/body" exact component={ArchiveBody} />
        </Switch>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
