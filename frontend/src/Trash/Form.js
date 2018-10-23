<form onSubmit={this.handleEdit} method="POST" >
             
                        
<FormGroup row>
<Col md={5}>

<div>
  <figure className="Figimage"> Upload Passport Here...
  <input type="file" ref="passport" className="ImgFile" />
  </figure>
  </div> 

  </Col>
 
  
 <Col md={6}>
 <Label>patient id</Label>
   <input  onChange={e =>this.setState({id:e.target.value})}     className="Form-control" value={this.state.id} placeholder="id" />
 </Col> 

</FormGroup>

<FormGroup row>
 
 <Col md={6}>
 <Label>SurName</Label>
   <input onChange={e =>this.setState({surname:e.target.value})} className="Form-control" value={this.state.surname} placeholder="SurName" />
 </Col>

 <Col md={6}>
 <Label>FirstName</Label>
 <input onChange={e =>this.setState({firstname:e.target.value})} className="Form-control" value={this.state.firstname} placeholder="FirstName" />
 </Col>


  <Col md={2}>
<legend className="col-form-label md-1" ref="gender">Gender</legend>
 <FormGroup check>
     <Label check>
       <input type="radio" ref="male" onChange={e =>this.setState({male:e.target.value})} className="Form-control" value={this.state.male}  />{' '}
       Male
      </Label>
   </FormGroup>
   <FormGroup check>
     <Label check>
       <input   type="radio" ref="female" onChange={e =>this.setState({female:e.target.value})} className="Form-control" value={this.state.female}  />{' '}
       Female
     </Label>
   </FormGroup>
</Col>
<Col md={5}>
<Label>Age</Label>
 <input type="number" ref="age" id="Age" onChange={e =>this.setState({age:e.target.value})} className="Form-control" value={this.state.age} placeholder="Age" />
</Col>

<Col md={5}>
<Label>Marital Status</Label>
<input  type="text" ref="maritalstatus" id="MaritalStatus"  onChange={e =>this.setState({maritalstatus:e.target.value})} className="Form-control" value={this.state.maritalstatus}  placeholder="Marital Status" />
</Col>

<Col md={5}>
<Label>Date Of Birth</Label>
 <input  type="date" ref="DOB" id="DOB" onChange={e =>this.setState({DOB:e.target.value})} className="Form-control" value={this.state.DOB}  placeholder="Date Of Birth" />
 </Col>

 <Col md={3}>
<Label>Tribe</Label>
 <input   type="text" ref="tribe" id="Tribe" onChange={e =>this.setState({tribe:e.target.value})} className="Form-control" value={this.state.tribe}  placeholder="Tribe" />
 </Col>

 <Col md={4}>
<Label>Religion</Label>
 <input   type="text" ref="religion" id="Religion" onChange={e =>this.setState({religion:e.target.value})} className="Form-control" value={this.state.religion}  placeholder="Religion" />
 </Col>

 <Col md={5}>
<Label>Phone Number</Label>
 <input type="text" ref="phoneNo" id="PhoneNo" onChange={e =>this.setState({phoneNo:e.target.value})} className="Form-control" value={this.state.phoneNo}  placeholder="Phone Number" />
 </Col>

 <Col md={2}></Col>
 <Col md={5}>
<Label>Email Address</Label>
 <input  type="text" ref="email" id="Email" onChange={e =>this.setState({email:e.target.value})} className="Form-control" value={this.state.email}  placeholder="Email Address" />
 </Col>

 <Col md={4}>
<Label>Nationality</Label>
 <input onChange={e =>this.setState({nationality:e.target.value})} className="form-control" type="text"  ref="nationality" value={this.state.nationality}  placeholder="Nationality" />
 </Col>

 <Col md={4}>
 <Label>State</Label>
 <input  type="text" className="State" ref="state" id="State" onChange={e =>this.setState({state:e.target.value})} className="Form-control" value={this.state.state}  placeholder="State" />
 </Col> 

 <Col md={4}>
 <Label>LGA</Label>
 <input type="text" className="lga" ref="lga" id="LGA" onChange={e =>this.setState({lga:e.target.value})} className="Form-control" value={this.state.lga}  placeholder="LGA" />
 </Col> 

< Col md={5}>
 <Label>Occupation</Label>
 <input type="text" className="Occupation" ref="occupation" id="Occupation" onChange={e =>this.setState({occupation:e.target.value})} className="Form-control" value={this.state.occupation}  placeholder="Occupation" />
 </Col> 
 < Col md={1}></Col> 

 <Col md={6}>
 <Label>Address</Label>
 <input type="textarea" className="address" ref="address" onChange={e =>this.setState({address:e.target.value})} className="Form-control" value={this.state.address}  id="Address" />
 </Col>
 <Col md={12}>
 <legend>Next Of Kin Information</legend>             
     </Col>
 <Col md={6}>
 <Label>Name</Label>
   <input type="text" ref="kinName" className="Form-control" onChange={e =>this.setState({kinName:e.target.value})} className="Form-control" value={this.state.kinName}  placeholder="Kin Name" />
 </Col>

 <Col md={6}>
 <Label>RelationShip</Label>
   <input  type="text" ref="kinRelationShip" className="Form-control" onChange={e =>this.setState({kinRelationship:e.target.value})} className="Form-control" value={this.state.kinRelationship}  placeholder="RelationShip" />
 </Col>
 
 <Col md={5}>
<Label>Phone Number</Label>
 <input type="text" ref="KinPhone" id="PhoneNo" onChange={e =>this.setState({kinPhone:e.target.value})} className="Form-control" value={this.state.kinPhone}  placeholder="Kin Phone Number" />
 </Col>
 <Col md={2}></Col>
 <Col md={5}>
<Label>Email Address</Label>
 <input type="text" ref="KinEmail" id="KinEmail" onChange={e =>this.setState({kinEmail:e.target.value})} className="Form-control" value={this.state.kinEmail}  placeholder="Kin Email Address" />
 </Col>

 < Col md={5}>
 <Label>Occupation</Label>
 <input type="text" className="Occupation" ref="KinOccupation" id="KOccupation" onChange={e =>this.setState({kinoccupation:e.target.value})} className="Form-control" value={this.state.kinoccupation}  placeholder="Occupation" />
 </Col> 
 < Col md={1}></Col> 

 <Col md={6}>
 <Label>Address</Label>
 <input  type="textarea" className="Kinaddress" ref="KinAddress" id="KAddress" onChange={e =>this.setState({kinAddress:e.target.value})} className="Form-control" value={this.state.kinAddress}  />
 </Col>
</FormGroup>
<div className="row">
 <div className="col-md-4">
   <Button onClick={this.closeModal} color="danger" >submit</Button>
 </div>
 <div className=" col-md-4">
   <Button color="success">Edit</Button>
 </div>
 <div className="col-md-4">
   <Button color="primary">Print</Button>
 </div>
</div>

<div className="row">
<Col md={4}>  </Col>

   <Col md={4}>  </Col>
 </div>

               </form>