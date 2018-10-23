import React, {Component} from 'react';
import {Container, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, textarea, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import ModalPage from './ModalPage'
import PatientDetails from './PatientDetails';
// import './Style/App.css';

class EditAthropometry extends Component {
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

    delete(e){
        e.preventDefault();
        this.refs.weightVal.value = "";
        this.refs.heightVal.value = "";
        this.refs.headCircumferenceVal.value = "";
        this.refs.muacVal.value = "";
    }

    submit(e){
        e.preventDefault();
  this.setState({athropometry: {
        Weight: this.refs.weightVal.value,
        Height: this.refs.heightVal.value,
        HeadCircumference: this.refs.headCircumferenceVal.value,
        MUAC: this.refs.muacVal.value,

        }}, function() {
            console.log(this.state);
        })
    }
  
    render(){

        return(
       
        <Container className="Container">
            <Button color="primary"><a  onClick={this.toggle} >Edit</a></Button>
            <Modal Class="PatModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Edit</ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Weight:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="weightVal" className="form-control" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Height/Length:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="heightVal" className="form-control" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Head Circumference:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="headCircumferenceVal" className="form-control" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>MUAC:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="muacVal" className="form-control" />
                        </Col>
                    </FormGroup>
                    
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.submit.bind(this)}>Update</Button>
                   
                    <Button color="danger" onClick={this.delete.bind(this)}>Delete</Button>        
                </ModalFooter>
            </Modal>

            
        </Container>   



        )
    }
}




export default EditAthropometry;