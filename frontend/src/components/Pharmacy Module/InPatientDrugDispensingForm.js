import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';

class InPatientDrugDispensingForm extends Component {
    render () {
        return (
            <div>
                <Card>
                    <CardHeader>
                    In-Patient Drug Dispensing Form
                    </CardHeader>
                    <CardBody>
                        <form className="">
                            <div className="row form-group">
                                <label className="col-md-2">Date</label>
                                <input className="col-md-4  form-control" type="date" ref="date" />
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2">Patient Type</label>
                                <select className="col-md-2  form-control">
                                    <option ref="in-patient">In Patient</option>
                                </select>
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2">Patient Number</label>
                                <input className="col-md-4  form-control" type="text" ref="patient-number" />
                                <label className="col-md-2">Account Number</label>
                                <input className="col-md-4  form-control" type="text" ref="accout-number" />
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2">Patient Name</label>
                                <input className="col-md-4  form-control" type="text" ref="patient-name" />
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2">Drugs</label>
                                <input className="col-md-4  form-control" type="text" ref="drugs" />
                                <label className="col-md-2">Quantity</label>
                                <input className="col-md-4  form-control" type="text" ref="accout-number" />
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2">Price</label>
                                <label className="col-md-4"></label>
                                <label className="col-md-2">Balance</label>
                                <label className="col-md-4"></label>
                            </div>
                            <div className="row form-group">
                                <label className="col-md-2">Dosage</label>
                                <input className="col-md-4  form-control" type="text" ref="dosage" />
                            </div>
                            <button className="btn col-md-1" >Add to List</button>
                        </form>
                    </CardBody>
                </Card></div>
        )
    }
}

export default InPatientDrugDispensingForm;