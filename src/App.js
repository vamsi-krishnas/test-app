import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CommonContainer } from './components/CommonContainer.jsx';
import { Price } from './components/Price/Price.jsx';
import { Navigation } from './components/Navigation.jsx';
import { Header } from './components/header/header.jsx';
import './sass/index.scss';

const NavItems = [
  { text: 'Moving to', url: '/' },
  { text: 'Type', url: '/type' },
  { text: 'Size', url: '/size' },
  { text: 'From', url: '/from' },
  { text: 'Date', url: '/date' },
  { text: 'Price', url: '/price' },
]

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Navigation NavItems={NavItems} />
          <div>
            <Route path="/" exact render={() => <CommonContainer>Moving to</CommonContainer>} />
            <Route path="/type" exact render={() => <CommonContainer>Type</CommonContainer>} />
            <Route path="/size" exact render={() => <CommonContainer>Size</CommonContainer>} />
            <Route path="/from" exact render={() => <CommonContainer>From</CommonContainer>} />
            <Route path="/date" exact render={() => <CommonContainer>Dates</CommonContainer>} />
            <Route path="/price" exact component={Price} />
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
