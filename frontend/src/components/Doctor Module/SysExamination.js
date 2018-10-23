import React, {Component} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, input, Button, Collapse} from 'reactstrap';
import SysExaminationEdit from './SysExaminationEdit';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class SysExamination extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
       
        this.state = { 
            collapse: false , 
        };
      
      } 
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

    render(){
        return(

            <Container className="container">
       
                    {/* emptyt colum by the left */}
                    

                    {/* colum containing the system Examination entry */}
           
            <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>System Examination</Button>
          
                <Collapse id="sysExam-collapse" isOpen={this.state.collapse}>
                    <div className="offset-md-4">
                        <SysExaminationEdit/>
                    </div>
                        <Form >
                            <FormGroup row>
                                <Label  sm={4}>General Examination</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={4}>CVS</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={4}>Respiratory</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label  sm={4}>CNS</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                            </FormGroup>    
                            <FormGroup row>
                                <Label  sm={4}>MSS</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                                
                            </FormGroup>   
                            <FormGroup row>
                                <Label  sm={4}>ABDOMEN</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                                
                            </FormGroup> 

                            <FormGroup row>
                                <Label  sm={4}>OTHERS</Label>
                                <Col sm={8}>
                                    <label></label>
                                </Col>
                                
                            </FormGroup>    
                             
                        </Form>

                </Collapse>

                                
            </Container>
           
                            
        )
    }
}

export default SysExamination;
