import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button,  FormGroup, Container, Row, Table, Col, Label, Input,  InputGroupAddon, InputGroup, Modal, ModalBody} from 'reactstrap';


class PatientListRender extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const renderPatientList = this.props.patientrecords.map((patientrecords) =>
            <tr key={patientrecords.id}>
            <td>{patientrecords.id} </td>
            <td>{patientrecords.firstname} </td>
            <td>{patientrecords.surname}</td>
            <td>{patientrecords.Gender}</td>
            <td><button className="btn btn-primary" onClick={() => this.openModal(patientrecords)} style={{ marginBottom: '1rem' }}>Edit </button >
            |<button className="btn btn-danger" style={{ marginBottom: '1rem' }} >
            <a onClick={() => this.deletepatientrecords(patientrecords)} >Delete</a></button>
            
            </td>
            </tr>
        );

        const renderSearchResult = this.props.searchResult.map((record) =>
            <tr key={record.id}>
            <td>{record.id} </td> 
            <td>{record.firstname} </td>
            <td>{record.surname}</td>
            <td>{record.Gender}</td>
            <td><button className="btn btn-primary" onClick={() => this.openModal(record)} style={{ marginBottom: '1rem' }}>Edit </button >
            |<button className="btn btn-danger" style={{ marginBottom: '1rem' }} >
            <a onClick={() => this.deletepatientrecords(record)} >Delete</a></button>
            
            </td>
            </tr>
        );
        if(this.props.searchResult){
        return (
            <tbody>
                {renderPatientList}
                <tr>
                    <td colSpan="6">
                    </td>
                </tr>
            </tbody>
             
        );
    } else {
        return (
            <tbody>
                {renderSearchResult}
                <tr>
                    <td colSpan="6">
                    </td>
                </tr>
            </tbody>
             
        );
    }
    }

}

export default PatientListRender;