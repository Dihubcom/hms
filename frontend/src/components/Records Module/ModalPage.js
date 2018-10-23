import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, Form, FormGroup, input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FormErrors } from './FormErrors';
// import './Style/App.css';

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      surname: '',
      firstname: '',
      gender: '',
      age: '',
      maritalstatus: '',
      DOB: '',
      tribe: '',
      religion: '',
      phoneNo: '',
      email: '',
      nationality: '',
      state: '',
      lga: '',
      occupation: '',
      address: '',
      kinName: '',
      kinrelationship: '',
      kinphone: '',
      kinemail: '',
      kinoccupation: '',
      kinAddress: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      modal: false
    };
    this.logChange = this.logChange.bind(this);
    this.setGender = this.setGender.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
  }

 setGender(e) {
  this.setState({ gender: e.target.value })
 }

 logChange(e) {
  this.setState({[e.target.ref]: e.target.value});  
}

  toggle() {
    this.setState({
      modal: !this.state.modal
    });

  }
//   handleSubmit(e, {formData}) {
//     e.preventDefault();
//     console.log(formData);
// }
handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let firstnameValid = this.state.firstnameValid;
  let surnameValid = this.state.surnameValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'firstname':
      firstnameValid = value.length >= 6;
      fieldValidationErrors.firstname = firstnameValid ? '': ' is too short';
      break;
    case 'surname':
      surnameValid = value.length >= 6;
      fieldValidationErrors.surname = surnameValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  firstnameValid: firstnameValid,
                  surnameValid: surnameValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.firstnameValid && this.state.surnameValid});
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

handleSubmit(event) { 
  event.preventDefault()
   const data = {}
   data.gender = this.state.gender;
   for (const field in this.refs){
      data[field]=this.refs[field].value;
      // data[field]=this.refs[field].value;
  }
  console.log(data)
  fetch('http://localhost:4000/patientrecords/new', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)}).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          console.log(data)    
          if(data === "success"){
             this.setState({msg: "Thanks for registering"}); 
              
          }
      }).catch(function(err) {
          return err;
      });
      
  }
  
  render() {


    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        
        <Button onClick={this.toggle}>Add New patient{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>Add New patient</ModalHeader>
          <ModalBody>
         
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
         <FormGroup row>
         <Col md={5}>
        
         <div>
           <figure className="Figimage"> Upload Passport Here...
           <input type="file" ref="passport" className="ImgFile" />
           </figure>
           </div> 

           </Col>
          
           
          <Col md={6}>
          <Label>patient id</Label>
            <input  onChange={this.logChange}  type="text" ref="id" className="form-control id" placeholder="patient id" />
          </Col> 
      
        </FormGroup>

        <FormGroup row>
          
          <Col md={6}>
          <Label>SurName</Label>
            <input  onChange={this.handleUserInput}  name="surname" type="text" ref="surname" className="form-control Surname" placeholder="SurName" />
          </Col>

          <Col md={6}>
          <Label>FirstName</Label>
          <input  onChange={this.handleUserInput}  name="firstname"  type="text" ref="firstname" className="form-control Firstname" placeholder="Name" />
          </Col>
         

           <Col md={2}>
        <legend className="col-form-label md-2">Gender</legend>
        <FormGroup >
              <Label >
                <input onClick={this.setGender} checked={this.state.gender == "female"} type="radio" value="female"  name="gender" />{' '}
                Female
               </Label>
            </FormGroup>
            <FormGroup >
              <Label >
                <input onClick={this.setGender} checked={this.state.gender == "male"} type="radio" value="male" name="gender" />{' '}
                Male
              </Label>
            </FormGroup>
         </Col>
         <Col md={5}>
         <Label>Age</Label>
          <input  onChange={this.logChange} className="form-control" type="number"  ref="age" placeholder="Age" />
         </Col>

         <Col md={5}>
         <Label>Marital Status</Label>
         <select onChange={this.logChange} ref="maritalstatus" className="form-control">
          <option value=""></option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>
         </Col>

         <Col md={5}>
         <Label>Date Of Birth</Label>
          <input  onChange={this.logChange} className="form-control" type="date" ref="DOB" placeholder="Date Of Birth" />
          </Col>

          <Col md={3}>
         <Label>Tribe</Label>
          <input  onChange={this.logChange} className="form-control" type="text" ref="tribe" placeholder="Tribe" />
          </Col>

          <Col md={4}>
         <Label>Religion</Label>
          <select onChange={this.logChange} ref="religion" className="form-control">
            <option value=""></option>
            <option value="islam">Islam</option>
            <option value="christianity">Christianity</option>
            <option value="traditional">Traditional</option>
            <option value="others">Others </option>
          </select>
          </Col>

          <Col md={5}>
         <Label>Phone Number</Label>
          <input  onChange={this.logChange} className="form-control" type="number"  ref="phoneNo" placeholder="Phone Number" />
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
         <Label>Email Address</Label>
          <input  onChange={this.handleUserInput} name="email" className="form-control" type="text"  ref="email" placeholder="Email Address" />
          </Col>

          <Col md={4}>
         <Label>Nationality</Label>
          <input  onChange={this.logChange} className="form-control" type="text"  ref="nationality" placeholder="Nationality" />
          </Col>

          <Col md={4}>
          <Label>State</Label>
          <input  onChange={this.logChange} className="form-control" type="text"   ref="state" placeholder="State" />
          </Col> 
         
          <Col md={4}>
          <Label>LGA</Label>
          <input  onChange={this.logChange} className="form-control" type="text"   ref="lga" placeholder="LGA" />
          </Col> 

         < Col md={5}>
          <Label>Occupation</Label>
          <input onChange={this.logChange} className="form-control" type="text"  ref="occupation" placeholder="Occupation" />
          </Col> 
          < Col md={1}></Col> 

          <Col md={6}>
          <Label>Address</Label>
          <input onChange={this.logChange} className="form-control" type="textarea" ref="address"  placeholder="Address" />
          </Col>
          <Col md={12}>
          <legend>Next Of Kin Information</legend>             
              </Col>
          <Col md={6}>
          <Label>Name</Label>
            <input onChange={this.logChange} className="form-control"  ref="kinName" placeholder="Kin Name" />
          </Col>

          <Col md={6}>
          <Label>RelationShip</Label>
            <input onChange={this.logChange} className="form-control" type="text"  ref="kinRelationship" placeholder="RelationShip" />
          </Col>
          
          <Col md={5}>
         <Label>Phone Number</Label>
          <input onChange={this.logChange} className="form-control" type="text" ref="kinPhone" placeholder=" Kin Phone Number" />
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
         <Label>Email Address</Label>
          <input onChange={this.logChange} className="form-control" type="text" ref="kinEmail" placeholder=" Kin Email Address" />
          </Col>

          < Col md={5}>
          <Label>Occupation</Label>
          <input onChange={this.logChange} className="form-control" ref="kinoccupation" id="Occupation" placeholder=" Kin Occupation" />
          </Col> 
          < Col md={1}></Col> 

          <Col md={6}>
          <Label>Address</Label>
          <input onChange={this.logChange} className="form-control" type="textarea" ref="kinAddress" placeholder=" Kin Address" />
          </Col>
        </FormGroup>
        
        <div className="row">
        <Col md={4}>   
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <button type="submit" onClick={this.toggle} className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>          
     
            </Col>
        </div>

        <div className="row">
        <Col md={4}>  </Col>
       
            <Col md={4}>  </Col>
          </div>
      
      </form>
          </ModalBody>

          <ModalFooter>
          
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPage;