import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, ModalHeader, ModalBody, ModalFooter, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
// import ModalPage from './ModalPage'
import PatientDetails from './PatientDetails';
import CreateVitalSigns from './CreateVitalSigns';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class VitalSigns extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
         
          this.state = { 
            collapse: false , 
        
        };
      
      }
      
      
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    
    render(){
        
        return(
       
        <Container className="Container">


                <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Vital Signs</Button>
                <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
                    <FormGroup row>
                    <div className="offset-md-5">
                            <CreateVitalSigns/>
                        </div>
        
                        
                    </FormGroup>
                    
                    <br/> <br/>
                    <FormGroup row>
                    
                        <Label>Temperature (C):
                            
                        </Label>
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Blood Pressure (mmHg):
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Respiratory Rate (c/min):
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Pulse Rate (b/min):
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Height (m):
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Weight (kg):
                            
                        </Label> 
                    </FormGroup>
                    </Collapse>
               
            </Container>   





        )
    }



}

export default VitalSigns;