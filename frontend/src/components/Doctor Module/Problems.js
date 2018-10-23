import React, {Component} from 'react';
import {Container, Row, Col, colSpan, Modal, Table, Span, Input, InputGroup, Label, InputGroupAddon, Collapse, CardBody, Card, Button, ButtonGroup, FormGroup} from 'reactstrap';
import NewProblems from './NewProblems';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';


class Problems extends Component {
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

                <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Problems</Button>
                <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
                    <FormGroup row>
                    <div className="offset-md-5">
                            <NewProblems />
                        </div>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={1}>
                            <Label>1.
                            </Label>
                        </Col>
                       
                    </FormGroup>
                    <FormGroup row>
                        <Col md={1}>
                            <Label>2.
                            </Label>
                        </Col>
                        
                    </FormGroup>
                    <FormGroup row>
                        <Col md={1}>
                            <Label>3.
                            </Label>
                        </Col>
                        
                    </FormGroup>
                    <FormGroup row>
                        <Col md={1}>
                            <Label>4.
                            </Label>
                        </Col>
                        
                    </FormGroup>
                    <FormGroup row>
                        <Col md={1}>
                            <Label>5.
                            </Label>
                        </Col>
                       
                    </FormGroup>
                    </Collapse>
  

        </Container>   



        )
    }
}




export default Problems;