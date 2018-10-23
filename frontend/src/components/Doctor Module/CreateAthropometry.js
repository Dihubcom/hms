import React, {Component} from 'react';
import {Container,  Col,  Modal, ModalHeader, ModalBody, ModalFooter,  Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';



class CreateAthropometry extends Component {
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
            <Button  color="success"><a  onClick={this.toggle} >Enter New Athropometry</a></Button>
            <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Enter New Athropometry</ModalHeader>
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
                    <Button color="primary" onClick={this.handleSubmit.bind(this)}>Add</Button> 
                    <Button color="danger" onClick={this.toggle} >Back</Button>    
                </ModalFooter>
            </Modal>
            
            
            
        </Container>   



        )
    }
}




export default CreateAthropometry;