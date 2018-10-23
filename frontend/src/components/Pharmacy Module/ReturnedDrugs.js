import React, {Component} from 'react';
import { Button, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class ReturnedDrugs extends Component {
    constructor(props) {
        super(props);
        
        
         
       
    }
   

    render() {
        return(
            
            <div className="returnedDrugs">              
                <h3>Returned Drugs</h3>
                <div className="row">
                    <InputGroup className="col-md-10" >
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
                                    <th >Request Date</th>
                                    <th >Patient No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>23-OCT-17</td>
                                        <td>SANI SHEHU(506938)</td>

                                    </tr>
                                </tbody>
                            </Table>
                        </div>
               
            </div>

        );
    }
}

export default ReturnedDrugs;