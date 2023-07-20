import React, { Component } from 'react';
import { Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'; 
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/Musical';
import Community from './components/Community';
import Login from './components/Login';
import Main from './screen/Main';
import MnavBar from './components/MnavBar';
import Mfooter from './components/Mfooter';
import ViewButton from './views/ViewButton';
import InputForm from './views/InputForm';
import { Container } from 'react-bootstrap';
import Concert from './components/Concert';
import Show from './components/Show';
import Orchestra from './components/Orchestra';
import MusicalDetail from './components/MusicalDetail';
import Musical from './components/Musical';
import MusicalDetail2 from './components/MusicalDetail2';
import MusicalDetail3 from './components/MusicalDetail3';
import Directions from './components/Directions';
import Notice from './components/Notice';
import SignForm from './components/SignForm';
class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <MnavBar />
          <Switch>
            {/* default값 */}
            <Route exact path="/" component={Main}/>

            {/* 경로만 있음 */}
            <Route exact path="/About" component={About}/>
            <Route exact path="/Show" component={Show} />
            <Route exact path="/Community" component={Community}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/SignForm" component={SignForm} />
            <Route exact path="/Concert" component={Concert} />
            <Route exact path="/Orchestra" component={Orchestra} />
            <Route exact path="/Musical" component={Musical} />
            <Route exact path="/MusicalDetail" component={MusicalDetail} />
            <Route exact path="/MusicalDetail2" component={MusicalDetail2} />
            <Route exact path="/MusicalDetail3" component={MusicalDetail3} />  
            <Route exact path="/Notice" component={Notice} />
            <Route exact path='/Directions' component={Directions} />

            <Route exact path="/views/ViewButton" component={ViewButton} />
            <Route exact path='/views/ViewButton/:crud' component={InputForm} />


          </Switch>
          <Mfooter />
        </Container>
      </div>
    );
  }
}

export default App;