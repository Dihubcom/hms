import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class AllRecievedDrugsReport extends Component {
    render() {
        return(
            <Card>
                    <CardHeader>
                    Recieved Drugs Report
                    </CardHeader>
                    <CardBody>
                    <form >
                    <div className="form-group  row">
                        <label  className="col-md-2">First Date</label>
                        <input type="date" className="form-control col-md-4" ref="date" />
                    </div>
                    <div className="form-group row">
                        <label  className="col-md-2">Second Date</label>
                        <input type="date" className="form-control col-md-4" ref="date" />
                        </div>
                        <div className="form-group col-md-10">
                        <button className="btn btn-primary">Go</button>
                    </div>
                    
                </form>
                <div style={{ height: '600px' }}>
                </div>
                    </CardBody>
                </Card>
        )
    }
}

export default AllRecievedDrugsReport;