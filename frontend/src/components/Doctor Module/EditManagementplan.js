import React, {Component} from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, textarea, Button, Collapse} from 'reactstrap';
// import './Style/App.css';


class EditManagementplan extends Component {
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

            <Container className="container">
                <Row>
                    {/* emptyt colum by the left */}
                    <Col md="2"></Col>

                    {/* colum containing the system Examination entry */}
                    <Col md="8">
                    <div>
                    <Button color="primary"><a  onClick={this.toggle} >Add New</a></Button>   
          
               <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} >
                <ModalHeader toggle={this.toggle}>Enter New Added Care</ModalHeader>
                <ModalBody>
                    
                        <Form>
                            <FormGroup row>
                                <Label  md={3}>Added Care:</Label>
                                <Col md={8}>
                                    <textarea ref="AddedCare" className="form-control"  type="textarea" name="text"  />
                                </Col>
                            </FormGroup>
                           
     
                            
                        </Form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit.bind(this)}>Add</Button> 
                    <Button color="danger" onClick={this.toggle}>Back</Button>    
                </ModalFooter>
            </Modal>
            
                </div>
            
                    </Col>

                    {/* empty colum by the right  */}
                    <Col md="2"></Col>
                </Row>
            
            </Container>
           
                            
        )
    }
}

export default EditManagementplan;
