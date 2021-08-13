import React, { useState } from 'react';
import Events from './components/Events/Events';
import Home from './components/home/Home';
import './app.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
const [content, setContent] = useState([]);

  return (
    <div className="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/aii">
          <Home setContent={setContent} content={content}/>
        </Route>
        <Route path="/aii/events">
          <Events/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
