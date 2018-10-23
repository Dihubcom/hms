import React, {Component} from 'react';
import { Button,  FormGroup, Container, Row, Table, Col, Label, Glyphicon, Input,  InputGroupAddon, InputGroup, Modal, ModalBody} from 'reactstrap';
import { escape } from 'querystring';
import * as FontAwesome from 'react-icons/lib/fa';


class TableRow extends React.Component {
    render() {
      const patient = this.props.patient;
      
  
      return (
        <tr>
          
          <td>{patient.id}</td>
          <td>{patient.firstname} {patient.surname}</td>
          <td>{patient.Gender}</td>
          <td className="moveToCenter">
            <button className="btn btn-primary" onClick={() => this.props.openModal(patient)} style={{ marginBottom: '1rem' }}>Edit </button >
          </td>
          <td className="moveToCenter">
            <button className="btn btn-danger" style={{ marginBottom: '1rem' }} >
            <a onClick={() => this.props.deletepatientrecords(patient)} >Delete</a></button>
          </td>
        </tr>
      );
    }
  }

class PatientTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
  
      const rows = [];
  
      this.props.patientlist.forEach((patient) => {
        if (patient.id.toString().indexOf(filterText) === -1 ) {
          return;
        }  
         
        
        rows.push(
          <TableRow
            patient={patient}
            key={patient.id}
            deletepatientrecords={this.props.deletepatientrecords}
            openModal={this.props.openModal}

          />
        );
      });
  
      return (
        <Table size="sm">
          <thead>
            <tr>
              <th>Patient No</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th className="moveToCenter">Edit Record</th>
              <th className="moveToCenter">Delete Record</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      );
    }
  }

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    
    render() {
      return (
        <form>
          <div className="input-group">
            <FontAwesome.FaSearch size={45} />
            <input
              type="text"
              placeholder="Search for a patient..."
              className="searchInput"
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </div>
        </form>
      );
    }
}

class FilterableTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',

      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <br/>
          <PatientTable
            patientlist={this.props.patientlist}
            filterText={this.state.filterText}
            deletepatientrecords={this.props.deletepatientrecords}
            openModal={this.props.openModal}
          />
        </div>
      );
    }
  }


export default FilterableTable;