import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, ModalHeader, ModalBody, ModalFooter, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import EditManagementplan from './EditManagementplan';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';


class Managementplan extends Component {
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
       
                
                <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Management Plan</Button>
                <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
                         
                    <div className="offset-md-4">
                        <EditManagementplan/>
                        </div>
                       
                    <FormGroup row>
                    
                       <label>Added Care:</label>
                    </FormGroup>
                    
                    </Collapse>

            
        </Container>   



        )
    }



}

export default Managementplan;