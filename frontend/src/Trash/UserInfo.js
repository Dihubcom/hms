import React, { Component } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Label, Form, FormGroup, Input } from 'reactstrap';



 class UserInfo extends Component {
    
          constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
    
          handleSubmit(e) {
            e.preventDefault();
            
            const formData = {};
            for (const field in this.refs) {
              formData[field] = this.refs[field].value;
              formData[field] = this.refs[field].value;
              

            }
            console.log('-->', formData);
          }
    
          render() {
            return (
                <div>
                  <form onSubmit={this.handleSubmit}>
                  <input ref="fname" className="Fname" type='text' name="FName"/><br/>
                    <input ref="phone" className="phone" type='tel' name="phone"/><br/>
                    <input ref="email" className="email" type='tel' name="email"/>
                    <input type="submit" value="Submit"/>

                    <legend className="col-form-label sm-1" ref="patientGender">Gender</legend><br/>
                  <FormGroup check>
                 <Label check>
                <input type="radio" checked={gender == "male"} 
                onClick={this.setGender} value="male" /> Male
               </Label>
              </FormGroup>
              <FormGroup check>
              <Label check>
                <input type="radio"  className="female" name="radio2" />{' '}
                Female
              </Label>
            </FormGroup>
                  </form>
                </div>
            );
          }
        }
    
        export default UserInfo;