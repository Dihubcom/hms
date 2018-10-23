import React, {Component} from 'react';
import {Container, Col, Label, Button, Collapse, FormGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import EditDressingRequest from './EditDressingRequest';


class DressingRequest extends Component {
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
       
       <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Dressing Request</Button>
        <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
        <div className="offset-md-5">
          <EditDressingRequest />
        </div>
       <FormGroup row><br/>
       <Col sm={3}><br/>
       <Label>Part to dress:</Label> 
       </Col>

       <Col sm={7}><br/>
         <label></label>
       </Col><br />
       </FormGroup><br />

       <FormGroup row><br/>
       
       <Col sm={3}><br/>
       <Label>Dress With:</Label> 
       </Col>

       <Col sm={7}><br/>
        <label></label>

       </Col><br />
       </FormGroup><br />
         
</Collapse>
            
        </Container>   



        )
    }



}

export default DressingRequest;