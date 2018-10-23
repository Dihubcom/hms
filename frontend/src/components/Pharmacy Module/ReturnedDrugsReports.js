import React, {Component} from 'react';
import { Button, Card, CardBlock, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class ReturnedDrugsReports extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Returned Drugs Reports</CardHeader>
                    <CardBlock>
                        <div className="row">
                            <label className="col-md-2">Date1</label>
                            <input type="date" className="form-control col-md-3" />
                            <label className="col-md-2">Date2</label>
                            <input type="date" className="form-control col-md-3" />
                        </div>
                        <div style={{height: "20em"}}></div>
                    </CardBlock>
                </Card>
            </div>
        )
    }
}

export default ReturnedDrugsReports