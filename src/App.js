import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailMovie from './components/Movies/Detail';
import Movies from './components/Movies/Movies';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route exact path="/" component={Movies}/>
            <Route exact path="/detail/:id" component={DetailMovie}/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
