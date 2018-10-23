import React, {Component} from 'react';
import { Button, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class ReportOnReturnedDrugs extends Component {
    constructor(props) {
        super(props);

    }
   
    render() {
        return(
            
            <div className="">              
                <h3>Returned Drugs</h3>
                <div className="row">
                    <InputGroup className="col-md-7" >
                            <Input />
                            <InputGroupAddon addonType="append">
                            <Button color="secondary">Search</Button>
                            </InputGroupAddon>
                    </InputGroup>
                    <select>
                        <option value="actions">Actions</option>
                    </select>
                </div>
                    <div style={{ marginTop:"20px" }}>
                        <Table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th >Drug Type</th>
                                    <th >Request Date</th>
                                    <th >Patient No</th>
                                    <th >Quantity</th>
                                    <th >Qty Returned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><button>File</button></td>
                                        <td >TAB WARFARIN 3MG</td>
                                        <td >23-OCT-17</td>
                                        <td >SANI SHEHU(506938)</td>
                                        <td >1</td>
                                        <td >13</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
               
            </div>

        );
    }
}

export default ReportOnReturnedDrugs;