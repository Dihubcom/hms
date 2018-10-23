import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';

class BackLog extends Component {
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
                                <label className="col-md-3 control-lable">Date</label>
                                <input className="col-md-7 form-control"  type="date" ref="date" />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Patient Type</label>
                                <select className="">
                                    <option ref="in-patient">In Patient</option>
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
                                <input className="col-md-7 form-control" type="text" ref="Dosage" />
                                </div>
                           
                            </div>

                            <div className="col-md-5"> 
                              
                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Account Number</label>
                                <input className="col-md-7 form-control"  type="text" ref="Account Number" />
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Balance</label>
                                <label className="col-md-7"></label>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3 control-lable">Quantity</label>
                                <input className="col-md-7 form-control" type="text" ref="Quantity" />
                            </div>
                            </div>
                            <div className="col-md-2"> 
                            <button className="btn" >Add to List</button>
                         </div>
                           
                        </form>
                    </CardBody>
                </Card></div>
        )
    }
}

export default BackLog;