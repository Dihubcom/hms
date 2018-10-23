import React, { Component } from 'react';
import { Button, Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Collapse, Container, thead,Table, Option, Row, Col, Label, Input, value,  FormText, InputGroupAddon, InputGroup, onChange,} from 'reactstrap';
import Ptable from './Ptable';
// import logo from './logo.svg';
// import './Style/App.css';



class EditDressingRequest extends Component {
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

      <Col sm={1}></Col>

      {/* main content(form col) */}
      <Col sm={10}>
      <Button color="primary"><a  onClick={this.toggle} >Add New</a></Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add New Dressing Request</ModalHeader>
                    <ModalBody>
      <Form>
       <FormGroup row><br/>
          
   
          <Label className="col-md-2">Part to Dress</Label> 
          <input type="text" name="partToDress" ref="partToDress" className="form-control col-md-5" />
            

          </FormGroup><br />

          <FormGroup row><br/>
   
          <Label className="col-md-2">Dress With</Label> 
          <input type="int" ref="dressWith" name="dressWith" className="form-control col-md-5"/>

          </FormGroup><br />

        {/* Addprescription button */}
                       
            </Form>
            </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit.bind(this)}>Add</Button>
                    <Button color="danger" onClick={this.toggle}>Back</Button> 
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

export default EditDressingRequest ; 
