import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class TransferFromOtherUnitsReport extends Component {
    render() {
        return(
            <Card>
                    <CardHeader>
                    Transferd Drugs
                    </CardHeader>
                    <CardBody>
                        <form className="" >
                            <div className=" form-group row">
                                <label className="control-label col-md-2">First Date </label>
                                <input type="date" ref="date" className="form-control col-md-4" />
                            </div>
                            <div className=" form-group row">
                                <label  className="control-label col-md-2">Second Date</label>
                                <input type="date" ref="date" className="form-control col-md-4"/>
                            </div>
                            <div className=" form-group row">
                                <label className="control-label col-md-2">Unit</label>
                                <select className="form-control col-md-4">
                                    <option ref="">NHIS Pharmacy Unit</option>
                                    <option ref="">Specialty Pharmacy Unit</option>
                                    <option ref="">In-patient Pharmacy Unit</option>
                                </select>
                            </div>
                                <div  className=" form-group col-md-3">
                                <button className="btn btn-primary"  >Go</button>
                           
                            </div>
                            
                        </form>
                        <div style={{ height: '30em' }}>
                        </div>
                    </CardBody>
                </Card>
        )
    }
}

export default TransferFromOtherUnitsReport;