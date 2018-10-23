import React, {Component} from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter,  Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';



class NewProblems extends Component {
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
                
                <Button color="success"><a  onClick={this.toggle} >Enter New Problems</a></Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Problems</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                            <Col md={1}>
                                <Label>1.
                                </Label>
                            </Col>
                            <Col>
                                <textarea type="text" ref="Val1" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={1}>
                                <Label>2.
                                </Label>
                            </Col>
                            <Col>
                                <textarea type="text" ref="Val2" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={1}>
                                <Label>3.
                                </Label>
                            </Col>
                            <Col>
                                <textarea type="text" ref="Val3" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={1}>
                                <Label>4.
                                </Label>
                            </Col>
                            <Col>
                                <textarea type="text" ref="Val4" className="form-control" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={1}>
                                <Label>5.
                                </Label>
                            </Col>
                            <Col>
                                <textarea type="text" ref="Val5" className="form-control" />
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




export default NewProblems;