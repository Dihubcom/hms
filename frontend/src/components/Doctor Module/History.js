import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, ModalHeader, ModalBody, ModalFooter, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import CreateNewHistory from './CreateNewHistory';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class History extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
         
          this.state = { 
            collapse: false , 
            historyData: []
        
        };
    }
            
      toggle() {
        this.setState({ collapse: !this.state.collapse });
        //pregnancyHistory: historyData.PBNH
      }

    render(){

        return(
       
        <Container className="Container">
       
                
                <Button block color="secondary" className="btn btn-glass" onClick={this.toggle} style={{ marginBottom: '1rem' }}>History</Button>

                <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
                    <div className="offset-md-5">
                            <CreateNewHistory /> 
                     </div>
                                         
                    <br/> <br/>
                    <FormGroup row>
                    
                        <Label>Pregnancy,Brith Neonatal History:
                            
                        </Label>
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Nutrition History:
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Immunization History:
                            
                        </Label> 
                    </FormGroup>
                    <FormGroup row>      
                        <Label>Developmental History:
                            
                        </Label> 
                    </FormGroup>
                    </Collapse>

            
        </Container>   



        )
    }



}

export default History;