import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, ModalHeader, ModalBody, ModalFooter, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
 import NewRadiologyInvestigations from './NewRadiologyInvestigations';
 import 'bootstrap/dist/css/bootstrap.css';
//  import './Style/App.css';


class RadiologyInvestigations extends Component {
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
       
        <Container className="Container">
       
                
                <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Clinical / Lab /Radiology Investigations</Button>
                <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
                    <FormGroup row>
                        
                        <div className="offset-md-4">
                         <NewRadiologyInvestigations /> 
                        </div>
                        
                    </FormGroup>
                    
                    <br/> <br/>
                    <FormGroup row>
                    
                        <Label>Required Investigation (and Others):
                            
                        </Label>
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Required Sample:
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Lab Name:
                            
                        </Label> 
                    </FormGroup>
                    
                    </Collapse>

            
        </Container>   



        )
    }



}

export default RadiologyInvestigations;