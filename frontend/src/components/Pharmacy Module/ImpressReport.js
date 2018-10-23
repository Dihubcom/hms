import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class ImpressReport extends Component {
    render() {
        return(
            <Card>
                    <CardHeader>
                     Report on Impress
                    </CardHeader>
                    <CardBody>
                    <form >
                    <div className="form-group  row">
                        <label  className="col-md-2 control-label">First Date</label>
                        <input className="col-md-4 form-control" type="date" ref="date" />
                    </div>
                    <div className="form-group row">
                        <label  className="col-md-2">Second Date</label>
                        <input className="col-md-4 form-control" type="date" ref="date" />
                        </div>
                        <div className="form-group col-md-10">
                        <button className="btn btn-primary">Go</button>
                    </div>
                    
                </form>
                <div style={{ height: '100px' }}>
                </div>
                    </CardBody>
                </Card>
        )
    }
}

export default ImpressReport;