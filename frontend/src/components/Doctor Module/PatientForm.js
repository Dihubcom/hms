import React, {Component} from 'react';
import { Form, FormGroup, Container, Label, Col, Row, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';
// import ModalPage from './ModalPage'
// import PatientDetails from './PatientDetails';


class PatientForm extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    render(){

        return(
       
        <Container className="Container">
            <Row>
           <Form className="">

            <FormGroup row>

                    <Col sm={4}><br/>
                    
                        
                    
                    <Label className="imageFig"> Upload Passport Here...
                    <Input type="file" ref="Imagefile" className="ImgFile" />
                    </Label>
                    
                
                    </Col>
                    <Col sm={4}><br/></Col>

                    <Col sm={4}><br/>
                    <Label>Date</Label>
                        <Input type="" ref="Date" className="Form-control" placeholder="Date" />
                        {/* <FormText color="muted">
                        Upload Passport Here...
                        </FormText> */}
                    </Col>
                    </FormGroup>

                    <FormGroup row><br/>
                    
                    <Col sm={4}><br/>
                    <Label>Surname: {this.props.surname}</Label>
                    
                    </Col>

                    <Col sm={4}><br/>
                    <Label>Firstname: {this.props.firstname}</Label>
                        
                    </Col><br />

                    <Col sm={4}><br/>
                    <FormGroup check>
                        <Label >Gender: {this.props.gender}</Label>
                        </FormGroup>
                    </Col>
                    <Col sm={4}><br/>
                    <Label>Age: {this.props.age}</Label>
                    </Col>

                    <Col sm={4}><br/>
                    <Label>Marital Status: {this.props.maritalStatus}</Label>

                    </Col>

                    <Col sm={4}><br/>
                    <Label>Date Of Birth: {this.props.DOB}</Label>

                    </Col>

                    <Col sm={4}><br/>
                    <Label>Tribe: {this.props.tribe}</Label>

                    </Col>

                    <Col sm={4}><br/>
                    <Label>Religion: {this.props.religion}</Label>

                    </Col>

                    <Col sm={4}><br/>
                    <Label>Phone Number: {this.props.phoneNo}</Label>

                    </Col>
                    <Col sm={4}><br/></Col>
                    <Col sm={4}><br/>
                    <Label>Email Address: {this.props.email}</Label>
                    </Col>

                </FormGroup>
            </Form>
            </Row>
        </Container>   



        )
    }



}

export default PatientForm;