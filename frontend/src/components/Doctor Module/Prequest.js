import React, {Component} from 'react';
import {Container,  Col,   Label, Button, Collapse, FormGroup} from 'reactstrap';
import EditPrescriptionRequest from './EditPrescriptionRequest';
import 'bootstrap/dist/css/bootstrap.css';


class Prequest extends Component {
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
       
       <Button block color="secondary" className="btn btn-glass"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Prescription Request</Button>
        <Collapse id="patientdetail-collapse" isOpen={this.state.collapse}>
        <div className="offset-md-5">
          <EditPrescriptionRequest />
        </div>
       <FormGroup row><br/>
          
          <Col sm={3}><br/>
          <Label>Select Drugs</Label> 
          </Col>

          <Col sm={7}><br/>
            <label></label>
          </Col><br />
          </FormGroup><br />

          <FormGroup row><br/>
          
          <Col sm={3}><br/>
          <Label>Price</Label> 
          </Col>

          <Col sm={7}><br/>
           <label></label>
   
          </Col><br />
          </FormGroup><br />

          <FormGroup row><br />
          <Col sm={3}><br/>
           <Label>Dosage</Label></Col>
           <Col sm={7}><br/>
           <label></label>
            </Col>
         </FormGroup><br />
         
</Collapse>
            
        </Container>   



        )
    }



}

export default Prequest;