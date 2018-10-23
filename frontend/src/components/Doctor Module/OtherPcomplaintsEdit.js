// import React, {Component} from 'react';
// import {Container, Row, Col, Table, Button,input, Collapse, Form, FormGroup, Label, } from 'reactstrap';
// import './App.css';
// import PcomplaintsEdit from './PcomplaintsEdit';
// import 'bootstrap/dist/css/bootstrap.css';


// class OtherPcomplaintsEdit extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//           modal: false
//         };
    
//         this.toggle = this.toggle.bind(this);
//       }
    
     
    
//       toggle() {
//         this.setState({
//           modal: !this.state.modal
//         });
//       }
    
//         submit(e){
//             e.preventDefault();
//             this.setState({OtherPcomplaintsEdit: {
//             Others: this.refs.Others.value,
//             HistoryOfPresentingComplaints: this.refs.HistoryOfPresentingComplaints.value,
//             ImmunizationHistory: this.refs.ImmunizationHistory.value,
//             DevelopmentHistory: this.refs.DevelopmentHistory.value,
    
//             }}, function() {
//                 console.log(this.state);
//             })
//         }

//     render(){
//         // margin top for inputs
   
//         return(
//             <div className="otherPresentingComplaints">
//                 <h5>Other Problem Complaints</h5>
//                 <FormGroup row>
//                     <Label className="col-md-3">Others:                       
//                     </Label>
                    
//                     <textarea ref="Others" className="form-control col-md-6"/>
                      
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">History of Presenting Complaints:                       
//                 </Label>
//                 <textarea ref="HistoryOfPresentingComplaints" className="form-control col-md-6">
                   
//                 </textarea>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Social History:                       
//                 </Label>
//                 <textarea className="form-control col-md-6">
                   
//                 </textarea>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Social History:                       
//                 </Label>
//                     <div>
//                     <label><input name= "social" value="married" type="checkbox" />Married  </label>
//                         <label><input name= "social" value="smoking" type="checkbox"  />Smoking  </label>
//                         <label><input name= "social" value="alcohol" type="checkbox"  />Alcohol  </label>
                        
//                     </div>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Other Social History:                       
//                 </Label>
//                 <textarea className="form-control col-md-6">
                    
//                 </textarea>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Obts & Gynea History:                       
//                 </Label>
//                 <textarea className="form-control col-md-6">
                    
//                 </textarea>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Past Medical History:                       
//                 </Label>
//                 <textarea className="form-control col-md-6">
                    
//                 </textarea>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Allergy:                       
//                 </Label>
//                     <div>
//                         <label><input name= "allergy" value="foodstuff" type="checkbox" />Food Stuff  </label>
//                         <label><input name= "allergy" value="flower" type="checkbox"  />Flower  </label>
//                         <label><input name= "allergy" value="dust" type="checkbox"  />Dust/Smoke  </label>
//                         <label><input name= "allergy" value="drugs" type="checkbox"  />Drugs  </label>
//                     </div>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Other Allergies:                       
//                 </Label>
//                 <textarea ref="otherAllergies" className="form-control col-md-6">
                    
//                 </textarea>
//                 </FormGroup>
//                 <FormGroup row>      
//                 <Label className="col-md-3">Drug History:                       
//                 </Label>
//                 <textarea ref="drugHistory" className="form-control col-md-6">
                  
//                 </textarea>
//                 </FormGroup>
//             </div>
//         )
//     }
// }

// export default OtherPcomplaintsEdit;