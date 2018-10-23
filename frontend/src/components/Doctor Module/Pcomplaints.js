import React, {Component} from 'react';
import {Container, Row, Col, Table, Button,input, Collapse, Form, FormGroup, Label, } from 'reactstrap';
import PcomplaintsEdit from './PcomplaintsEdit';
import OtherPcomplaints from './OtherPcomplaints';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class Pcomplaints extends Component{
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
        // margin top for inputs
   
        return(
            <Container className="container">
          
                <Button block color="secondary" className="btn btn-glass" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Presenting Complaints</Button>                   
                    
                        <div>
                            <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
                            <div className="offset-md-4">
                                <PcomplaintsEdit/>
                                </div>
                                    <Form>
                                      <FormGroup row>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 1</Label>
                                        <Col sm={2}>
                                            <label></label>
                                        </Col>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 2</Label>
                                        <Col sm={2}>
                                            <label></label>
                                        </Col><br/>
                                     </FormGroup>

                                     <FormGroup row>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 3</Label>
                                        <Col sm={2}>
                                            <label></label>
                                        </Col>
                                        <Label for="" sm={4} size="sm">Presenting Complaints 4</Label>
                                        <Col sm={2}>
                                            <label></label>
                                        </Col>
                                     </FormGroup>
                                    </Form>
                                    <OtherPcomplaints/>
                            </Collapse>
                        </div>

            </Container>
        )
    }
}

export default Pcomplaints;