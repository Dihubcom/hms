import React, {Component} from 'react';
import {Container, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Span, textarea, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
// import ModalPage from './ModalPage'
import PatientDetails from './PatientDetails';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class CreateVitalSigns extends Component {
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

        return(
       
            <Container className="Container">
                
                <Button color="success"><a  onClick={this.toggle} >New Vital Signs</a></Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New Vital Signs</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                            <Col md={3}>
                                <Label>Temperature (C):
                                </Label>
                            </Col>
                            <Col md={5}>
                                <textarea type="text" ref="tempVal" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={3}>
                                <Label>Blood Pressure (mmHg):
                                </Label>
                            </Col>
                            <Col md={5}>
                                <textarea type="text" ref="pressureVal" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={3}>
                                <Label>Respiratory Rate (c/min):
                                </Label>
                            </Col>
                            <Col md={5}>
                                <textarea type="text" ref="respiratoryVal" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={3}>
                                <Label>Pulse Rate (b/mim):
                                </Label>
                            </Col>
                            <Col md={5}>
                                <textarea type="text" ref="pulseVal" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={3}>
                                <Label>Height (m):
                                </Label>
                            </Col>
                            <Col md={5}>
                                <textarea type="text" ref="heightVal" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={3}>
                                <Label>Weight (kg):
                                </Label>
                            </Col>
                            <Col md={5}>
                                <textarea type="text" ref="weightVal" className="form-control" />
                            </Col>
                        </FormGroup>

                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleSubmit.bind(this)}>Add</Button>   
                        <Button color="danger" onClick={this.toggle} >Back</Button>
                    </ModalFooter>
                </Modal>
                
            
            
            
        </Container>   



        )
    }
}




export default CreateVitalSigns;