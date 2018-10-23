import React, {Component} from 'react';
import {CardHeader, CardBody, Card} from 'reactstrap';

class TransferDrugsToOther extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: '',
            selectDrugs: '',
            price: '',
            quantity: '',
            transferTo: '',
        }
    }

    render() {
        return(
            
            <div>
                <Card>
                    <CardHeader className="">
                        <div style={{display:'inline', float:''}}>Transfer Drugs to other Unit</div>
                        <div style={{display:'inline', float:'right'}}>
                            <button className="btn btn-default btn- ">Cancel</button>{' '} 
                            <button className="btn ">Delete</button>{' '} 
                            <button className="btn ">Save</button> 
                        </div></CardHeader>
                    <CardBody>
                <div className="row">                    
                    <form className="col-md-8 ">
                        <div className="form-group row">
                            <label className="col-md-3">Date</label>
                            <input type="date" className="form-control col-md-4" onChange={e =>this.setState({date:e.target.value})} value={this.state.date} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3">Select Drugs</label>
                            <input type="text" className="form-control col-md-6" onChange={e =>this.setState({selectDrugs:e.target.value})} value={this.state.selectDrugs} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3">Price (in units)</label>
                            <input type="text" className="form-control col-md-6" onChange={e =>this.setState({price:e.target.value})} value={this.state.price} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3">Quantity (in units)</label>
                            <input type="text" className="form-control col-md-6" onChange={e =>this.setState({quantity:e.target.value})} value={this.state.quantity} />
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3">Transfer To</label>
                            <input type="text" className="form-control col-md-6" onChange={e =>this.setState({transferTo:e.target.value})} value={this.state.transferTo} />
                        </div>
                    </form>
                    
                    <div className="">
                        <button className="btn btn-default btn-secondary">Add Drugs</button>  
                        <br /> <br/>
                        
                        <div></div>
                    </div>
                </div>
                </CardBody>
                </Card>
          
                <Card>
                    <CardHeader>List of Selected Items</CardHeader>
                    <CardBody>
                        <div><i>No item found</i></div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default TransferDrugsToOther;