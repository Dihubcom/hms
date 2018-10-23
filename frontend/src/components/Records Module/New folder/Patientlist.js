import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button,  FormGroup, Container, Row, Table, Col, Label, Input,  InputGroupAddon, InputGroup, Modal, ModalBody} from 'reactstrap';
import ModalPage from './ModalPage';
import AssignPatient from './AssignPatient';
import 'bootstrap/dist/css/bootstrap.css';
import UploadFile from './uploadFile';
import PatientListRender from './PatientListRender';
// import './Style/App.css';
// import PatientDetails from './PatientDetails';

// class PatientRender

class Patientlist extends Component {

    constructor(props) {
        super(props);
     
        this.state = { 
            patientrecords: [],
            searchText: '',
            searchResult: [],
            toggleMe: true,
            modalIsOpen: false,
            firstname: '',
            surname: '',
            id: 0,
            age: '',
            maritalstatus: '',
            dob: '',
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
            kinRelationship: '',
            kinPhone: '',
            kinEmail: '',
            kinOccupation: '',
            kinAddress: '',
           
         };
         this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.logChange = this.logChange.bind(this); // We capture the value and change state as user changes the value here.
        this.setGender = this.setGender.bind(this);
        this.handleEdit = this.handleEdit.bind(this); // Function where we submit data
      }
            
      openModal(patientrecords) {
          
            this.setState({
                modalIsOpen: true,
                firstname: patientrecords.firstname,
                surname: patientrecords.surname,
                id: patientrecords.id,
                age: patientrecords.age,
                maritalstatus: patientrecords.maritalstatus,
                dob: patientrecords.dob,
                tribe: patientrecords.tribe,
                religion: patientrecords.religion,
                phoneNo: patientrecords.phoneNo,
                email: patientrecords.email,
                nationality: patientrecords.nationality,
                state: patientrecords.state,
                lga: patientrecords.lga,
                occupation: patientrecords.occupation,
                address: patientrecords.address,
                kinName: patientrecords.kinName,
                kinRelationship: patientrecords.kinRelationship,
                kinPhone: patientrecords.kinPhone,
                kinEmail: patientrecords.kinEmail,
                kinOccupation: patientrecords.kinOccupation,
                kinAddress: patientrecords.kinAddress,

              //  value: this.props.id
            });
        }
        

        closeModal() {
            this.setState({
                modalIsOpen: false
            });
        }

      deletepatientrecords(patientrecords){
      
        var data = {
            id: patientrecords.id
        }
        
        fetch('http://localhost:4000/patientrecords/delete', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            if(data === "success"){
               this.setState({msg: "User has been deleted."});  
            }
        }).catch(function(err) {
            return err;
        });
    }
    

    componentDidMount() {
        let self = this;
        
        fetch('http://localhost:4000/patientrecords/patientlist', {
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

    setGender(e) {
        this.setState({ gender: e.target.value })
       }

    logChange(e) {
       // this.setState({[e.target.ref]: e.target.value});  
    //    const data = {}
    //    data.gender = this.state.gender;
    //    for (const field in this.refs){
    //       data[field]=this.refs[field].value;
    //      // data[field]=this.refs[field].value;
    this.setState({[e.target.ref]: e.target.value}); 
    
    }

    handleEdit(e) {
        //Edit functionality
        e.preventDefault()
       
        var data = {
            firstname: this.state.firstname,
            surname: this.state.surname,
            id: this.state.id,
            gender: this.state.gender
        }
        // const data = {}
        // for (const field in this.refs){
        //    data[field]=this.refs[field].value;
        //    //data[field]=this.refs[field].value;
    //    } 
        fetch('http://localhost:4000/patientrecords/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json()
        }).then(function(data) {
            console.log(data)
            if (data === "success") {
                this.setState({
                    msg: "User has been edited."
                });
            }
        }).catch(function(err) {
            return err;
        });
	}
	
	
  handleSearch(e) {
    this.setState({searchText: e.target.value})
        
      let val = this.state.searchText;
      let records = this.state.patientrecords;
      const myTempArr = [];
           
      for (let i=0; i<records.length; i++) {
        if(records[i]['id'] === parseInt(val)) {
            myTempArr.push(records[i]);
            this.setState({ searchResult: myTempArr });
            
        }
      } return null;
  }
      
    render(){

        return(
       
        <Container className="Container">
            <Row>
                {/* first empty column */}
                <Col md="2"></Col>

                {/* patient list Table column */}
                <Col md="8">
                {/* List of patient table  */}
                 <InputGroup>
                <InputGroupAddon addonType="prepend"> 
                {/* Add Patient Modal Side */}
                <UploadFile />
                <ModalPage/> 
                <AssignPatient />
                    
                     </InputGroupAddon>
                   </InputGroup> 
                  
                    <br />

                    <InputGroup>
                     <input className="form-control" onChange={this.handleSearch.bind(this)} value={this.state.searchText} />
                        <InputGroupAddon addonType="append">
                         <Button color="secondary" >Search</Button> 
                        </InputGroupAddon>
                        
                 </InputGroup>
                 {/* <div>
                 filteredPatient.map( patientrecords =>{
                     return this.props.renderpatientrecords(patientrecords)
                 })
                     </div> */}
                
                    <br />
                    
                    <Table size="sm">
                        
                        <thead>
                            
                        <tr>
                            <th className=''>#PatientId</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                        </tr>

                        </thead>
                        <PatientListRender patientrecords={this.state.patientrecords} searchResult={this.state.searchResult} toggleMe={this.state.toggleMe} />
                        
                    </Table>
                    
                   </Col>

                {/* empty column by right  */}
                
                <Modal size="lg"   isOpen={this.state.modalIsOpen} >
                <ModalBody>
                <form  onSubmit={this.handleEdit} method="POST">
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
            <input   onChange={e =>this.setState({id:e.target.value})}     className="form-control" value={this.state.id} placeholder="id" />
          </Col> 
      
        </FormGroup>

        <FormGroup row>
          
          <Col md={6}>
          <Label>SurName</Label>
            <input onChange={e =>this.setState({surname:e.target.value})} className="form-control" value={this.state.surname} placeholder="SurName"/>
          </Col><br/>

          <Col md={6}>
          <Label>FirstName</Label>
          <input  onChange={e =>this.setState({firstname:e.target.value})} className="form-control" value={this.state.firstname} placeholder="FirstName" />
          </Col><br/>
         

           <Col md={2}>
        <legend className="col-form-label md-1" >Gender</legend>
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
              {"Selected Gender: "} {this.state.gender}
            </FormGroup>
         </Col>
         <Col md={5}>
         <Label>Age</Label>
          <input type="number" ref="age" id="Age" onChange={e =>this.setState({age:e.target.value})} className="form-control" value={this.state.age} placeholder="Age"/>
         </Col>

         <Col md={5}>
         <Label>Marital Status</Label>
         <input  type="text" ref="maritalstatus" id="MaritalStatus"  onChange={e =>this.setState({maritalstatus:e.target.value})} className="form-control" value={this.state.maritalstatus}  placeholder="Marital Status" />
         </Col>

         <Col md={5}>
         <Label>Date Of Birth</Label>
          <input  type="date" ref="DOB" id="DOB" onChange={e =>this.setState({DOB:e.target.value})} className="form-control" value={this.state.DOB}  placeholder="Date Of Birth" />
          </Col>

          <Col md={3}>
         <Label>Tribe</Label>
          <input type="text" ref="tribe" id="Tribe" onChange={e =>this.setState({tribe:e.target.value})} className="form-control" value={this.state.tribe}  placeholder="Tribe"  />
          </Col>

          <Col md={4}>
         <Label>Religion</Label>
          <input  type="text" ref="religion" id="Religion" onChange={e =>this.setState({religion:e.target.value})} className="form-control" value={this.state.religion}  placeholder="Religion"  />
          </Col>

          <Col md={5}>
         <Label>Phone Number</Label>
          <input  type="text" ref="phoneNo" id="PhoneNo" onChange={e =>this.setState({phoneNo:e.target.value})} className="form-control" value={this.state.phoneNo}  placeholder="Phone Number"  />
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
         <Label>Email Address</Label>
          <input  type="text" ref="email" id="Email" onChange={e =>this.setState({email:e.target.value})} className="form-control" value={this.state.email}  placeholder="Email Address" />
          </Col>

          <Col md={4}>
         <Label>Nationality</Label>
          <input  onChange={e =>this.setState({nationality:e.target.value})} className="form-control" type="text"  ref="nationality" value={this.state.nationality}  placeholder="Nationality" />
          </Col>

          <Col md={4}>
          <Label>State</Label>
          <input type="text" className="State" ref="state" id="State" onChange={e =>this.setState({state:e.target.value})} className="form-control" value={this.state.state}  placeholder="State" />
          </Col> 
         
          <Col md={4}>
          <Label>LGA</Label>
          <input type="text" className="lga" ref="lga" id="LGA" onChange={e =>this.setState({lga:e.target.value})} className="form-control" value={this.state.lga}  placeholder="LGA"/>
          </Col> 

         < Col md={5}>
          <Label>Occupation</Label>
          <input type="text" className="Occupation" ref="occupation" id="Occupation" onChange={e =>this.setState({occupation:e.target.value})} className="form-control" value={this.state.occupation}  placeholder="Occupation" />
          </Col> 
          < Col md={1}></Col> 

          <Col md={6}>
          <Label>Address</Label>
          <input type="textarea" className="address" ref="address" onChange={e =>this.setState({address:e.target.value})} className="form-control" value={this.state.address}  id="Address" />
          </Col>
          <Col md={12}>
          <legend>Next Of Kin Information</legend>             
              </Col>
          <Col md={6}>
          <Label>Name</Label>
            <input type="text" ref="kinName" className="form-control" onChange={e =>this.setState({kinName:e.target.value})} className="form-control" value={this.state.kinName}  placeholder="Kin Name" />
          </Col>

          <Col md={6}>
          <Label>RelationShip</Label>
            <input  type="text" ref="kinRelationship" className="form-control" onChange={e =>this.setState({kinRelationship:e.target.value})} className="form-control" value={this.state.kinRelationship}  placeholder="RelationShip" />
          </Col>
          
          <Col md={5}>
         <Label>Phone Number</Label>
          <input type="text" ref="kinPhone" id="PhoneNo" onChange={e =>this.setState({kinPhone:e.target.value})} className="form-control" value={this.state.kinPhone}  placeholder="Kin Phone Number"  />
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
         <Label>Email Address</Label>
          <input type="text" ref="kinEmail" id="KinEmail" onChange={e =>this.setState({kinEmail:e.target.value})} className="form-control" value={this.state.kinEmail}  placeholder="Kin Email Address" />
          </Col>

          < Col md={5}>
          <Label>Occupation</Label>
          <input  type="text" className="Occupation" ref="kinOccupation" id="KOccupation" onChange={e =>this.setState({kinOccupation:e.target.value})} className="form-control" value={this.state.kinOccupation}  placeholder="Occupation"  />
          </Col> 
          < Col md={1}></Col> 

          <Col md={6}>
          <Label>Address</Label>
          <input  type="textarea" className="Kinaddress" ref="kinAddress" id="KAddress" onChange={e =>this.setState({kinAddress:e.target.value})} className="form-control" value={this.state.kinAddress}  />
          </Col>
        </FormGroup>
        
        <div className="row">
        <Col md={4}>             
      <div className="Submit" toggle={this.toggle} ><button type="submit" onClick={this.toggle} className="btn"  onClick={this.closeModal} color="danger" >Submit</button></div>
            </Col>
        </div>

        <div className="row">
        <Col md={4}>  </Col>
       
            <Col md={4}>  </Col>
          </div>
      
      </form>
          


                        
                        </ModalBody>
                </Modal>
                <Col md="2"></Col>
                
            </Row>
            
        </Container>   
        
         



        )
    }



}

export default Patientlist;