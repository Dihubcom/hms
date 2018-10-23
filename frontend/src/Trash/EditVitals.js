import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, ModalHeader, ModalBody, ModalFooter, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
// import ModalPage from './ModalPage';
import PatientDetails from './PatientDetails';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class EditVitals extends Component {
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

    submit(e){
        e.preventDefault();
        this.setState({vitalSigns: {
        Temperature: this.refs.tempVal.value,
        Pressure: this.refs.pressureVal.value,
        Respiratory: this.refs.respiratoryVal.value,
        Pulse: this.refs.pulseVal.value,
        Height: this.refs.heightVal.value,
        Weight: this.refs.weightVal.value

        }}, function() {
            console.log(this.state);
        })
    }
  
    render(){

        return(
       
        <Container className="Container">
            <Button color="primary"><a  onClick={this.toggle} >Edit</a></Button>
            <Modal Class="PatModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Edit Vital Signs</ModalHeader>
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
                    <Button color="primary" onClick={this.submit.bind(this)}>Update</Button>        
                    <Button color="danger" onClick={this.submit.bind(this)}>Delete</Button>
                </ModalFooter>
            </Modal>
            
            
        </Container>   

        )
    }
}




export default EditVitals;