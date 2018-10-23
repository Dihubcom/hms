import React, { Component } from 'react';
import { Button, Form, FormGroup, select, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Collapse, Container, thead,Table, Option, Row, Col, Label, Input, value,  FormText, InputGroupAddon, InputGroup, onChange,} from 'reactstrap';
import PDrugs from './PDrugs';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';


class AddStockToStore extends Component{

render(){

    return(
  <Container>
<Row>
<Col sm={8}>
<Row>
<Col sm={6}><br/>
<Form>
    <h2></h2>
    <FormGroup row><br/>
<Label>WelCome To Pharmacy Stores</Label>
</FormGroup><br/>
              <FormGroup row><br/>
              
                    <Col sm={8}><br/>
                    <Label>Date:</Label>
                    <input type="date" ref="date" value="" className="form-control" />
                    </Col><br />

                    <Col sm={8}><br/>
                    <Label>Voucher Number:</Label><br/>
                    <Input type="text" ref="Vnumber"  value="" className="form-control" /> 
                    </Col><br />
                    </FormGroup>
                   
                    <Col sm={8}><br/>
                    <Label>Items Name:</Label>
                    <Input type="text" ref="itemsname"  value="" className="form-control" />
                    </Col>

                    <Col sm={8}><br/>
                    <Label>Currency:</Label>
                    <Input type="text" ref="curr"  value="" className="form-control" />
                    </Col>

                    <Col sm={8}><br/>
                    <Label>Expiry Date:</Label>
                    <Input type="date" ref="expdate"  value="" className="form-control" />
                    </Col>

                    <Col sm={8}><br/>
                    <Label>Receipt Number:</Label>
                    <Input type="text" ref="recnumber"  value="" className="form-control" />
                    </Col>

                    <Col sm={3}><br/>
                    <Label>value:</Label>

                    </Col>
</Form>
</Col>

<Col sm={6}><br/>

<Col sm={6}>
<Button type="" ref="addtostore"  value=" " className="form-control push-right" >Add To Store</Button><br/>
</Col>

<Col sm={6}><br/>
<Button type="" ref="addtostore"  value=" " className="form-control" >Save To List</Button><br/>
</Col>

<Col sm={8}><br/>
<Label>List of :</Label>
<Input type="text" ref="expdate"  value="" className="form-control" />
</Col>


<Col sm={8}><br/>
<Label>Price:</Label>
<Input type="text" ref="expdate"  value="" className="form-control" />
</Col>


<Col sm={8}><br/>
<Label>Select Aware No:</Label>
<Input type="select"  ref="expdate"  value="" className="form-control" name="select" id="Select">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    </Input>

</Col>

<Col sm={8}><br/>
<Label>Remaining:</Label>
</Col>
</Col>
</Row>
</Col>



<Col sm={4}ogoogo>jxjjj</Col>
</Row>


  </Container>
   
    );
}

}


export default AddStockToStore;