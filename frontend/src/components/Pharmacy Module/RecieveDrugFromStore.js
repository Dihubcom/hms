import React, {Component} from 'react';
import { Button, Input, InputGroup,Card,CardBody,CardHeader, Table, InputGroupAddon } from 'reactstrap';


class RecieveDrugFromStore extends Component {
    constructor(props) {
        super(props);

    }
   

    render() {
        return(
            
            <div className="recieveDrugFromStore">              
                <Card>
                    <CardHeader>Pending Recieve</CardHeader>
                    <CardBody>
                <div className="row">
                <InputGroup className="col-md-7" >
                        <Input />
                        <InputGroupAddon addonType="append">
                        <Button color="primary">Search</Button>
                        </InputGroupAddon>

                        
                 </InputGroup>
                   <select>
                        <option value="actions">Actions</option>
                    </select>
                    </div>
                    <div style={{ marginTop:"20px" }}>
                        <Table >
                            <thead>
                                <tr>
                                    <th>Request Date</th>
                                    <th>Req No</th>
                                    <th>Requested By</th>
                                    <th>Issued By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>23-OCT-17</td>
                                        <td>RETU 121-17</td>
                                        <td>Pharm Maryam</td>
                                        <td>Pharm Murtala</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        </CardBody>
                        </Card>
               
            </div>

        );
    }
}

export default RecieveDrugFromStore;