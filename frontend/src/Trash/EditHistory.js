import React, {Component} from 'react';
import {Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, textarea, Button, Collapse} from 'reactstrap';
// import './Style/App.css';



class EditHistory extends Component {
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
        console.log('-->', formData);
      }
    render(){
        return(

            <Container className="container">
                <Row>
                    {/* emptyt colum by the left */}
                    <Col md="2"></Col>

                    {/* colum containing the system Examination entry */}
                    <Col md="8">
                    <div><br/>
                    <Button color="primary"><a  onClick={this.toggle} >Edit</a></Button>   
          
               <Modal Class="PatModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Edit History</ModalHeader>
                <ModalBody>
                    
                        <Form>
                            <FormGroup row>
                                <Label  sm={3}>Pregnancy,Brith Neonatal History:</Label>
                                <Col sm={8}>
                                    <textarea ref="PBNH" className="form-control"  type="textarea" name="text"  />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={3}>Nutrition History:</Label>
                                <Col sm={8}>
                                    <textarea ref="NutritionHistory" className="form-control" type="textarea" name="text"  />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={3}>Immunization History:</Label>
                                <Col sm={8}>
                                    <textarea  className="form-control" ref="ImmunizationHistory" type="textarea" name="text"  />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={3}>Developmental History:</Label>
                                <Col sm={8}>
                                    <textarea ref="DevelopmentHistory"  className="form-control" type="textarea" name="text"  />
                                </Col>
                            </FormGroup>    
                           
                            
                        </Form>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button> 
                    <Button color="danger">Exit</Button>    
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

export default EditHistory;
