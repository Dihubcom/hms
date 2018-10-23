import React, {Component} from 'react';
import { Button, Card, CardBlock, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class TransferOtherUnitsReport extends Component {
    render() {
        return(
            <Card>
                    <CardHeader>
                        Daily Sales Report
                    </CardHeader>
                    <CardBlock>
                        <form >
                            <div className=" form-group row">
                                <label className="col-md-2">First Date </label>
                                <input type="date" ref="date" className="form-control col-md-4" />
                            </div>
                            <div className=" form-group row">
                                <label  className="col-md-2">Second Date</label>
                                <input type="date" ref="date" className="form-control col-md-4"/>
                            </div>
                            <div className=" form-group row">
                                <label className="col-md-2">Unit</label>
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
                        <div style={{ height: '600px' }}>
                        </div>
                    </CardBlock>
                </Card>
        )
    }
}

export default TransferOtherUnitsReport;