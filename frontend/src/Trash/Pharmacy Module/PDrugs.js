import React from 'react';
import { Button, Form, FormGroup, Col, Label, Input, Container, Row,  FormText, InputGroupAddon, InputGroup,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';


 class PDrugs extends React.Component {
  constructor(){
    super();
    this.state={
      bioData: {}
    }
  }

  handleSubmit(e){
  e.preventDefault();
  this.setState({bioData:{
    

  }}, function(){
    console.log(this.state);
  })
}

  render() {

    return (

     <div>
          <Container><br />
   
        <Row>
          {/* col by the left */}
        <Col sm={1}></Col>

         {/* col for table */}
      <Col sm={10}>
         <table>
             {/* table title */}
             <caption><h2>list of prescribed Drugs</h2></caption>
             <thead>
                 <th>Delete</th>
                 <th>Drug Name</th>
                 <th>Price</th>
                 <th>Price</th>
             </thead>




         </table>


   
        </Col>
        {/* col right */}
        <Col sm={1}></Col>
        </Row>
        </Container>
     </div>

    
      
    
    );
  }
}
export default PDrugs;