import React, { Component } from 'react';
import { Button, Form, FormGroup, select, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Collapse, Container, thead,Table, Option, Row, Col, Label, Input, value,  FormText, InputGroupAddon, InputGroup, onChange,} from 'reactstrap';
import PDrugs from './PDrugs';
// import logo from './logo.svg';
// import './Style/App.css';


class ListOfDrugs extends Component{

render(){

    return(
  <Container>
<Row>


<Form>
    <h2></h2>
    <FormGroup row><br/>
<Label>WelCome To Pharmacy Stores</Label>
</FormGroup><br/>
              <FormGroup row><br/>
              
                    <Col><br/>
                    <Label>Drug Name:</Label>
                    <input type="text" ref="date" value="" className="form-control" />
                    </Col><br />

                    <Col><br/>
                    <Label>Re-Order Level Number:</Label><br/>
                    <Input type="text" ref="Vnumber"  value="" className="form-control" /> 
                    </Col><br />
                    </FormGroup>
                   
                    <Col><br/>
                    <Label>Expiry Alert:</Label>
                    <Input type="select"  ref="expElert"  value="" className="form-control" name="select" id="Select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </Col>

</Form>



</Row>


  </Container>
   
    );
}

}


export default ListOfDrugs;