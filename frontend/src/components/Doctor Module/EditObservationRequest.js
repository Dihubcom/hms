import React, { Component } from 'react';
import { Button, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Collapse, Container, thead,Table, Option, Row, Col, Label,  value,  FormText, InputGroupAddon, InputGroup, onChange,} from 'reactstrap';
import Ptable from './Ptable';
// import logo from './logo.svg';
// import './Style/App.css';



class EditObservationRequest extends Component {
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

  render() {
    return (
        <div>
    <Container>
    
      <Row>
        {/* col by the left */}

      <Col md={1}></Col>

      {/* main content(form col) */}
      <Col md={10}>
      <Button color="primary"><a  onClick={this.toggle} >Add New</a></Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Add New Observation Request</ModalHeader>
                    <ModalBody>
      <Form>
       <FormGroup row><br/>
          
          <Col ><br/>
         
          </Col>
          <Label md={3}>Observation Request</Label> 
          <Col md={8}><br/>
            <textarea type="text" name="observationRequest" ref="observationRequest" className="form-control" /> 
          </Col><br />
          </FormGroup><br />

          

        {/* Addprescription button */}

          
             
            </Form>
            </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit.bind(this)}>Add</Button>
                         <Button color="danger" onClick={this.toggle} >Back</Button>
                    </ModalFooter>
                </Modal>    

</Col>
{/* col by the right */}
<Col sm={1}></Col>
</Row>
</Container>

  
      </div>
    );
  }
}

export default EditObservationRequest ; 
