import React, { Component } from 'react';
import logo from './logo.svg';
 import Problems from './components/Doctor Module/Problems';
import PatientClarking from './components/Doctor Module/PatientClarking';
import Pharmacy from './components/Pharmacy Module/Pharmacy';

import Patientlist from './components/Records Module/Patientlist';
import SysExaminationEdit from './components/Doctor Module/SysExaminationEdit';
import { Route, NavLink, HashRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './Style/App.css';


class App extends Component {
  render() {
    return (
<HashRouter>
  
      <div>
      <h1>Welcome To Dip-Hub</h1>
      <ul className="header">
    {/* <li><NavLink to="/">Home</NavLink></li> */}
    <li><NavLink to="/Patientlist">Record Module</NavLink></li>
    <li><NavLink to="/PatientClarking">Doctors Module</NavLink></li>
    <li><NavLink to="/Pharmacy">Pharmacy Module</NavLink></li>

      </ul>
      <div className="content">

      {/* <Route exact path="/" component={Home}/> */}
      <Route class="active" path="/Patientlist" component={Patientlist}/>
      <Route path="/PatientClarking" component={PatientClarking}/>
      <Route path="/Pharmacy" component={Pharmacy}/>
        </div>



      </div>
      </HashRouter>
      // <div className="App">
      // <NavLink to='/PatientClarking'
      // activeclassName="active"
      
      // > Patientlist</NavLink>
      // <NavLink to='/Contact'>Contact Us</NavLink>
      //   </div>

        //   <UserInfo /> 
        //   <Test/> 
        //  < Patientlist />   
        
        //  < PatientClarking /> 
        //  < ListOfDrugs /> 
        // < SysExaminationEdit />  
        
 
    
    );
  }
}

export default App;
