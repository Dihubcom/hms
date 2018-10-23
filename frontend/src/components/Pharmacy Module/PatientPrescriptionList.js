import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader,Modal, ModalBody, ModalFooter, ModalHeader, CardText, Input, InputGroup, Table, InputGroupAddon } from 'reactstrap';


class PendingPharmacyRequest extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
   
    render() {
        return(
            
            <div className=" ">              
                <Card>
                    <CardHeader>
                    Pending Pharmacy Request
                    </CardHeader>
                    <CardBody>
                <div className="row">
                    <InputGroup className='col-md-8' >
                            <Input  />
                            <InputGroupAddon addonType="append">
                            <Button color="secondary">Search</Button>
                            </InputGroupAddon>
                    </InputGroup>
                    <select className="col-md-1">
                        <option value="actions">Actions</option>
                    </select>
                    </div>
                    
                        <div style={{ margin:"5px" }}>
                            <Table size="sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Request Date</th>
                                        <th>Status</th>
                                        <th>Requested By</th>
                                        <th>Patient No</th>
                                        <th>Process</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>74255</td>
                                            <td>23-OCT-17</td>
                                            <td>pending</td>
                                            <td>DR. ISAH</td>
                                            <td>507055-18</td>
                                            <td>{this.toggle}<button>Process</button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                    <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle} ></ModalHeader>
                        <ModalBody>
                            <div>
                                <Card>
                                    <CardHeader>Bio Data</CardHeader>
                                    <CardBody>
                                        <form>
                                            <div className="form-group col-md-6">
                                                <label className="control-label">PatientID</label>
                                                <input className="form-control" ref="patientId" />
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-md-6">
                                                    <label className="control-label ">Account No</label>
                                                    <input className="form-control" ref="accNo" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="control-label">Balance</label>
                                                    <label className=""></label>
                                                </div>
                                            </div>
                                                <div className="form-group col-md-6">
                                                    <label className="control-label">Seen By</label>
                                                    <input className="form-control" ref="seenBy" />
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label className="control-label">Names</label>
                                                        <label className="control-label"></label>
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label className="control-label">Seen By</label>
                                                        <input className="form-control" ref="seenBy" />
                                                    </div>
                                                </div>
                                        </form>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>Drugs</CardHeader>
                                    <CardBody>
                                        <button className="btn btn-sm btnS">Go</button>
                                        <Table >
                                            <thead>
                                                <tr>
                                                    <th>Dr.</th>
                                                    <th>Prescription</th>
                                                    <th>Drugs</th>
                                                    <th>Price</th>
                                                    <th>Qty Dispensed</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Saada</td>
                                                        <td>2x3/7</td>
                                                        <td>PARACETAMOL INJECTION 300MG/2M</td>
                                                        <td>500</td>
                                                        <td ><input /></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>Add Drugs</CardHeader>
                                    <CardBody>
                                        <form>
                                            <div className="row">
                                                <label className="col-md-2">Drug</label>
                                                <input className="form-control col-md-4" />
                                                <label className="col-md-2">Quantity</label>
                                                <input className="form-control col-md-4" />
                                            </div>
                                            <div className="row">
                                                <label className="col-md-2">Price</label>
                                                <input className="form-control col-md-4" />
                                                <label className="col-md-2">Prescription</label>
                                                <input className="form-control col-md-4" />
                                            </div>
                                        </form>
                                    </CardBody>
                                </Card>
                            </div>
                        </ModalBody>
                    </Modal>
            </div>

        );
    }
}

export default PendingPharmacyRequest;