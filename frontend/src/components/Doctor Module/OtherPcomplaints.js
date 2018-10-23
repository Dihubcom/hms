import React, {Component} from 'react';
import {Container, Row, Col, Table, Button,input, Collapse, Form, FormGroup, Label, } from 'reactstrap';
import PcomplaintsEdit from './PcomplaintsEdit';
import 'bootstrap/dist/css/bootstrap.css';
// import './Style/App.css';

class OtherPcomplaints extends Component{
    render(){
        // margin top for inputs
   
        return(
            <div className="">
                <h5>Other Problem Complaints</h5>
                <FormGroup row>
                
                    <Label>Others:
                        
                    </Label>
                </FormGroup>
                <FormGroup row>      
                    <Label>History of Presenting Complaints:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                    <Label>Social History:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                    <Label>Other Social History:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                    <Label>Obst & Gynea History:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                    <Label>Past Medical History:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                    <Label>Allergy:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                    <Label>Other Allergies:
                        
                    </Label> 
                </FormGroup>
                <FormGroup row>      
                <Label>Drug History:
                    
                </Label> 
            </FormGroup>
            </div>
        )
    }
}

export default OtherPcomplaints;