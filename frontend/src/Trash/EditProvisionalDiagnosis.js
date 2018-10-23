import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, ModalHeader, ModalBody, ModalFooter, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';



class EditProvisionalDiagnosis extends Component {
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
         this.refs.Val1.value= "";
         this.refs.Val2.value= "";
         this.refs.Val3.value= "";
         this.refs.Val4.value= "";
         this.refs.Val5.value ="";
       
    }

    submit(e){
        e.preventDefault();
        this.setState({problems: {
        1: this.refs.Val1.value,
        2: this.refs.Val2.value,
        3: this.refs.Val3.value,
        4: this.refs.Val4.value,
        5: this.refs.Val5.value,


        }}, 
        function() {
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
                        <Button color="primary" onClick={this.submit.bind(this)}>Update</Button>   
                         <Button color="danger" onClick={this.submit.bind(this)}>Delete</Button>
                    </ModalFooter>
                </Modal>            
            
        </Container>   

        )
    }
}




export default EditProvisionalDiagnosis;