import React from 'react';
import { Button, Figure, Form, FormGroup,Container, Table, Row, Col,
   Label, Input,  FormText, Collapse, Card, CardBody,
   InputGroupAddon, InputGroup,} from 'reactstrap';
import PatientForm from './PatientForm';
import Athropometry from './Athropometry';
import PComplaints from './Pcomplaints';
import SysExamination from './SysExamination';
import Problems from './Problems';
import ProvisionalDiagnosis from './ProvisionalDiagnosis';
import VitalSigns from './VitalSigns';
import RadiologyInvestigations from './RadiologyInvestigations';
import Managementplan from './Managementplan';
import History from './History';
import Prequest from './Prequest';
import DressingRequest from './DressingRequest';
import ObservationRequestion from './ObservationRequest';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';
 import './doctor.css';

class PatienClarking extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    
    this.state = { 
      collapse: false,
      patientrecords: [],
      
  };
  }



  toggle(patientrecord) {
    this.setState({ 
        collapse: !this.state.collapse,
        firstname: patientrecord.firstname,
        surname: patientrecord.surname,
        age: patientrecord.age,
        gender: patientrecord.Gender,
        maritalStatus: patientrecord.maritalstatus,
        DOB: patientrecord.DOB,
        religion: patientrecord.religion,
        phoneNo: patientrecord.phoneNo,
        tribe: patientrecord.tribe,
        email: patientrecord.email
    });
  }

  fetchData(){

    let self = this;
    
    fetch('http://localhost:4000/patientrecords/doctor', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({patientrecords: data});
    }).catch(err => {
        return err;
    })
  }

 componentWillMount() {
     localStorage.getItem('patientrecords') && this.setState({
         patientrecords: JSON.parse(localStorage.getItem('patientrecords'))
     })
 } 

  componentDidMount() {
    this.fetchData();
    
   
}
componentWillUpdate(nextProps, nextState){
    localStorage.setItem('patientrecords', JSON.stringify(nextState.patientrecords));
}

 render(){
 return(

<div className="row">
    
        <table className="table table-hover assignPatTable col-md-2 ">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Patient ID</th>
                        <th>Patient Name </th>
                        {/* <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th> */}
                    </tr>
        </thead>
        <tbody>
        {this.state.patientrecords.map(patientrecord =>
                    <tr style={{ cursor:'pointer' }} key={patientrecord.id}>
                    <td>{patientrecord.date_assigned}</td>
                        <td><a onClick={() => this.toggle(patientrecord)} style={{ marginBottom: '1rem' }}>{patientrecord.id}</a> </td>
                    <td>{patientrecord.firstname} {patientrecord.surname}</td>
                   
                    </tr>
                        )}
                        
                </tbody>
            </table>

  

      

    <Col md={6}>
      <div>
       
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <PatientForm 
                firstname={this.state.firstname}
                surname={this.state.surname}
                age={this.state.age}
                gender={this.state.gender}
                maritalStatus={this.state.maritalStatus}
                DOB={this.state.DOB}
                religion={this.state.religion}
                phoneNo={this.state.phoneNo}
                tribe={this.state.tribe}
                email={this.state.email}
              />
              <PComplaints/>
              <History/>
              <SysExamination/>
              <VitalSigns/>
              <Problems/>
              <RadiologyInvestigations/>
              <ProvisionalDiagnosis/>
              <Athropometry/>
              <Managementplan/>
              <Prequest />
              <DressingRequest />
              <ObservationRequestion />
             

            </CardBody>
          </Card>
        </Collapse>
      </div>

</Col>

<Col md={3}>
<div  className="prvVisitDetails">
<h6> Previous Visiting Details</h6>
<Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              {/* <PatientForm /> */}
                
             Patient Previous Visiting Details ....
   </CardBody>
          </Card>
        </Collapse>
</div>


</Col>

</div>



 );

 }


}
export default PatienClarking;