import React, {Component} from 'react';
import { Button, Card, CardBlock, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';

class SalesReportBacklog extends Component {
    render() {
        return (
            <Card>
                <CardHeader>Daily Sales Report</CardHeader>
                <CardBlock style={{height: "30em"}}>
                    <button className="btn btn-success">Go</button> <br/>
                    <div className="form-group row">
                        <label className="col-md-3">Choose Backlog</label>
                        <select className="form-control col-md-5">
                            <option>choose backlog</option>
                        </select>
                    </div>
                </CardBlock>
            </Card>
        );
    }
}

export default SalesReportBacklog;