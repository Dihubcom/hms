import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';

class AddOtherCosting extends Component {
    render () {
        return (
            <div>
                <Card>
                    <CardHeader>
                        Drug Costing Form
                    </CardHeader>
                    <CardBody>
                        <form className="row">
                            <div className="col-md-5">

                            <div className="form-group row">
                                <label className="col-md-3">Date</label>
                                <input className="col-md-7"  type="date" ref="date" />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Select Account</label>
                                <input className="col-md-7"  type="text" ref="selectAccount" />
                            </div>
                            <div className="form-group row"> 
                                <label className="col-md-3">Patient Number</label>
                                <input className="col-md-7" type="text" ref="patientNumber" />
                                </div>
                            <div className="form-group row"> 
                                <label className="col-md-3">Patient Name</label>
                                <input className="col-md-7"  type="text" ref="patientName" />
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3">Description</label>
                                <input className="col-md-7" type="text" ref="description" />
                                </div>

                                <button>Add to list</button>
                            </div>

                            <div className="col-md-5"> 
                              <br/><br/><br/>
                            <div className="form-group row">
                                <label className="col-md-3">Select Account Chart</label>
                                <select>
                                    <option>R/DRUGS</option>
                                </select>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-md-3">Amount</label>
                                <input className="col-md-7" type="text" ref="amount" />
                            </div>
                            </div>
                            <div className="col-md-2"> 
                            <button className="btn" >Save Costing</button>
                         </div>
                           
                        </form>
                    </CardBody>
                </Card></div>
        )
    }
}

export default AddOtherCosting;