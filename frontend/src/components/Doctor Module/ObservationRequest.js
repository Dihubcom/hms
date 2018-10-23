import React, {Component} from 'react';
import {Container, Col, Label, Collapse,  Button,  FormGroup} from 'reactstrap';
import EditObservationRequest from './EditObservationRequest';
import 'bootstrap/dist/css/bootstrap.css';


class ObservationRequest extends Component {
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
       
       <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Observation Request</Button>
        <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
          <div className="offset-md-5">
            <EditObservationRequest />
          </div>
       <FormGroup row><br/>
       <Col sm={3}><br/>
       <Label>Observation Required:</Label> 
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

export default ObservationRequest;