import React, {Component} from 'react';
import {Container, Row, Col,  Button, Modal, ModalHeader, ModalBody, ModalFooter, input, Collapse, Form, FormGroup, Label, } from 'reactstrap';
import OtherPcompaintsEdit from './OtherPcomplaintsEdit';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class Pcomplaints extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

 

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

      handleSubmit(e) {
        e.preventDefault();

        const formData = {};
        for (const field in this.refs) {
          formData[field] = this.refs[field].value;
        }
        var array = JSON.parse(localStorage.getItem('data') || '[]');
        array.push(formData);
        localStorage.setItem('data', JSON.stringify(array));
        this.toggle();
      }
    render(){
        // margin top for inputs
   
        return(
            <Container className="container">
                <Row>
                    {/* empty colum by left */}
                    <Col md="2"></Col>


                    {/* column containing the table */}
                    <Col md="8">
                    <Button color="primary"><a  onClick={this.toggle} >Add New</a></Button><br/>   
                        <div>
                                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>Enter New Complaints</ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.handleSubmit}>
                                      <FormGroup row>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 1</Label>
                                        <Col sm={2}>
                                            <input ref="fever" type="radio" name="fever" />Fever <br/>
                                            <input ref="none" type="radio" name="fever" />None
                                        </Col>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 2</Label>
                                        <Col sm={2}>
                                            <input ref="cough" type="radio" name="cough" />Cough <br/>
                                            <input ref="none" type="radio" name="cough" />None 
                                        </Col><br/>
                                     </FormGroup>

                                     <FormGroup row>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 3</Label>
                                        <Col sm={2}>
                                            <input ref="Headache" type="radio" name="headache" />Headache <br/>
                                            <input ref="None"type="radio" name="headache" />None
                                        </Col>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 4</Label>
                                        <Col sm={2}>
                                            <input ref="vomiting" type="radio" name="vomiting" />Vomiting <br/>
                                            <input ref="none" type="radio" name="vomiting" />None
                                        </Col>
                                     </FormGroup>
                                     {/* <OtherPcompaintsEdit/> */}
                                     <h5>Other Problem Complaints</h5>
                <FormGroup row>
                    <Label className="col-md-3">Others:                       
                    </Label>
                    
                    <textarea ref="Others" className="form-control col-md-6"/>
                      
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">History of Presenting Complaints:                       
                </Label>
                <textarea ref="HistoryOfPresentingComplaints" className="form-control col-md-6">
                   
                </textarea>
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">Social History:                       
                </Label>
                <textarea ref="SocialHistory" className="form-control col-md-6">
                   
                </textarea>
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">Other Social History:                       
                </Label>
                    <div>
                    <label><input  ref="Married" name= "social" value="married" type="checkbox" />Married  </label>
                        <label><input  ref="Somking" name= "social" value="smoking" type="checkbox"  />Smoking  </label>
                        <label><input  ref="Alcohol" name= "social" value="alcohol" type="checkbox"  />Alcohol  </label>
                        
                    </div>
                </FormGroup>
               
                <FormGroup row>      
                <Label ref="ObtsGyneaHistory" className="col-md-3">Obts & Gynea History:                       
                </Label>
                <textarea className="form-control col-md-6">
                    
                </textarea>
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">Past Medical History:                       
                </Label>
                <textarea ref="PasttMedicalHistory" className="form-control col-md-6">
                    
                </textarea>
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">Allergy:                       
                </Label>
                    <div>
                        <label><input ref="FoodStuff" name= "allergy" value="foodstuff" type="checkbox" />Food Stuff  </label>
                        <label><input ref="Flower" name= "allergy" value="flower" type="checkbox"  />Flower  </label>
                        <label><input ref="DuskAndSmoke" name= "allergy" value="dust" type="checkbox"  />Dust/Smoke  </label>
                        <label><input ref="Drugs" name= "allergy" value="drugs" type="checkbox"  />Drugs  </label>
                    </div>
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">Other Allergies:                       
                </Label>
                <textarea ref="otherAllergies" className="form-control col-md-6">
                    
                </textarea>
                </FormGroup>
                <FormGroup row>      
                <Label className="col-md-3">Drug History:                       
                </Label>
                <textarea ref="drugHistory" className="form-control col-md-6">
                  
                </textarea>
                </FormGroup>
                                    </Form>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.handleSubmit.bind(this)}>Add</Button> 
                                        <Button color="danger" onClick={this.toggle} >Back</Button>   
                                    </ModalFooter>
                                </Modal>
                        </div>
                                        
                    </Col>

                    
                    {/* empty column by the right */}
                    <Col md="2"></Col>
                </Row>
            </Container>
        )
    }
}

export default Pcomplaints;