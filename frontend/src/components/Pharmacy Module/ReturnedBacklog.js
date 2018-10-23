import React, {Component} from 'react';
import { Button, Card, CardBlock, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';

class ReturnedBacklog extends Component {
    render () {
        return (
            <div>
                <Card>
                    <CardHeader>
                        Returned Drugs Backlogs
                    </CardHeader>
                    <CardBlock>
                        <form className="row">
                            <div className="col-md-5">

                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Date</label>
                                <input className="col-md-7 form-control"  type="date" ref="date" />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Patient Type</label>
                                <select className="">
                                    <option ref="in-patient">Out Patient</option>
                                </select>
                            </div>
                            <div className="form-group row"> 
                                <label className="col-md-3 control-lable">Patient Number</label>
                                <input className="col-md-7 form-control" type="text" ref="patient-number" />
                                </div>
                            <div className="form-group row"> 
                                <label className="col-md-3 control-lable">Patient Name</label>
                                <input className="col-md-7 form-control"  type="text" ref="Patient Name" />
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Drugs</label>
                                <input className="col-md-7 form-control" type="text" ref="drugs" />
                                </div>

                                <div className="form-group row">
                                <label className="col-md-3">Price</label>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 control-lable">Dosage</label>
                                    <input className="col-md-7 form-control" type="text" ref="dosage" />
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 control-lable">Backlog</label>
                                    <input className="col-md-7 form-control" type="text" ref="backlog" />
                                </div>

                                <button className="btn">Add to list</button>
                           
                            </div>

                            <div className="col-md-5"> 
                              <br/><br/><br/>
                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Account Number</label>
                                <input className="col-md-7 form-control"  type="text" ref="Account Number" />
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Quantity</label>
                                <input className="col-md-7 form-control" type="text" ref="Quantity" />
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Balance</label>
                                <label className="col-md-7"></label>
                            </div>
                            
                            </div>
                            <div className="col-md-2"> 
                                <button className="btn" >Save Costing</button>
                            </div>
                           
                        </form>
                    </CardBlock>
                </Card></div>
        )
    }
}

export default ReturnedBacklog;