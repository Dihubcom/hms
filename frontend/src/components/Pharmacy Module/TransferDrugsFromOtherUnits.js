import React, {Component} from 'react';
import {CardHeader, CardBody, Card} from 'reactstrap';

class TransferDrugs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            selectUnit: '',
            itemName: '',
            unitOfIssue: '',
            quantity: '',
            price: '',
            expiryDate: ''
        }

        };

    render() {
        return(
            
            <div>                
                <Card>
                    <CardHeader>Transfer From Other Unit</CardHeader>
                    <CardBody>
                    <div className="row">                    
                        <form className="col-md-8 ">
                            <div className="form-group row">
                                <label className="col-md-3">Date</label>
                                <input type="date" className="form-control col-md-3" onChange={e =>this.setState({date:e.target.value})} value={this.state.date} />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Select Unit</label>
                                <input type="text" className="form-control col-md-6" onChange={e =>this.setState({selectUnit:e.target.value})} value={this.state.selectUnit} />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Item Name</label>
                                <input type="text" className="form-control col-md-6" onChange={e =>this.setState({itemName:e.target.value})} value={this.state.itemName} />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Unit of Issue</label>
                                <input type="text" className="form-control col-md-6" onChange={e =>this.setState({unitOfIssue:e.target.value})} value={this.state.unitOfIssue} />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Quantity (in units)</label>
                                <input type="text" className="form-control col-md-6" onChange={e =>this.setState({quantity:e.target.value})} value={this.state.quantity} />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Price (in units)</label>
                                <input type="text" className="form-control col-md-6" onChange={e =>this.setState({price:e.target.value})} value={this.state.price} />
                            </div>
                            <div className="form-group row">
                                <label className="col-md-3">Expiry Date</label>
                                <input type="text" className="form-control col-md-6" onChange={e =>this.setState({expiryDate:e.target.value})} value={this.state.expiryDate} />
                            </div>
                        </form>
                        
                        <div >
                            <button className="btn btn-default btn-secondary">Add to Units</button>  
                            <br /> <br/>
                            <button className="btn btn-default btn-secondary">Save to List</button>  
                            <div></div>
                        </div>
                    </div>
                    </CardBody>
                </Card>
                
                
                
                <Card>
                    <CardHeader>List of Supplied Items</CardHeader>
                    <CardBody>
                        <div><i>No item found</i></div>
                    </CardBody>
                </Card>
              
            </div>

        );
    }
}

export default TransferDrugs;