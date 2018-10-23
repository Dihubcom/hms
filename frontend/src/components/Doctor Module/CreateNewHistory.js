import React, {Component} from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter,  Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';



class CreateNewHistory extends Component {
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
            <Button color="success"><a  onClick={this.toggle} >Enter New History</a></Button>
            <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Enter New History</ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Pregnancy,Brith Neonatal History:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="PBNH" className="form-control" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Nutrition History:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="NutritionHistory" className="form-control" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Immunization History:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="ImmunizationHistory" className="form-control" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={3}>
                            <Label>Developmental History:
                            </Label>
                        </Col>
                        <Col md={5}>
                            <textarea type="text" ref="DevelopmentHistory" className="form-control" />
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




export default CreateNewHistory;