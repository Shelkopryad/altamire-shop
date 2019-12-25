import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Price from './components/Price';
import Contacts from './components/Contacts';
import About from './components/About';
import PictureViewPort from './components/PictureViewPort';
import './App.css';

const Menu = () => (
  <div className='menu'>
    <div>
      <Link to='Price'>Price</Link>
    </div>
    <div>
      <Link to='Contacts'>Contacts</Link>
    </div>
    <div>
      <Link to='About'>About</Link>
    </div>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    const PUBLIC_URL = process.env.PUBLIC_URL;
    this.state = {
      paths: [
        PUBLIC_URL+'/images/img1.png',
        PUBLIC_URL+'/images/img2.png',
        PUBLIC_URL+'/images/img3.png',
        PUBLIC_URL+'/images/img4.png',
        PUBLIC_URL+'/images/img5.png',
        PUBLIC_URL+'/images/img6.png',
        PUBLIC_URL+'/images/img7.png',
        PUBLIC_URL+'/images/img8.png'
      ]
    }
  }

  render() {
    return (
      <Router>
        <div className='golden-grid'>
          <div className='logo'>Altamire</div>
          <div className="shop">shop</div>
          <Menu />
          <PictureViewPort paths={ this.state.paths } />

          <div className='content-area'>
            <Route path="/Price" component={ Price } />
            <Route path="/Contacts" component={ Contacts } />
            <Route path="/About" component={ About } />
            <Redirect from="/" to="About" />
          </div>

          <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="img01" alt="" />
            <div id="caption"></div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
