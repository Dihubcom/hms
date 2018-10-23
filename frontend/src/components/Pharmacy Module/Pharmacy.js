import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import TransferDrugs from './TransferDrugsFromOtherUnits';
import DrugRequisitionForm from './DrugRequisitionForm';
import AddDrugsImpressAccount from './AddNewDrugsToStore';
import TransferDrugsToOther from './TransferDrugsToOther';
import PendingPharmacyRequest from './PatientPrescriptionList';
import DrugDispensingForm from './DrugDispensingForm';
import InPatientDrugDispensingForm from './InPatientDrugDispensingForm';
import RecieveDrugFromStore from './RecieveDrugFromStore';
import ReturnedDrugs from './ReturnedDrugs';
import DailySalesReport from './DailySalesReport';
import SalesReport from './SalesReport';
import UpToDateStockBalance from './UpToDateStockBalance';
import InPatientSalesReport from './InPatientSalesReport';
import TransferOtherUnitsReport from './TransferToOtherUnitsReport';
import AllRecievedDrugsReport from './AllRecievedDrugsReport';
import EditDrugs from './EditDrugs';
import ImpressReport from './ImpressReport';
import RequestIssueReport from './RequestIssueReport';
import OnlineSalesReport from './OnlineSalesReport';
import TransferFromOtherUnitsReport from './TransferFromOtherUnitsReport';
import BackLog from './BackLog';
import DeleteWrongPosting from './DeleteWrongPosting';
import AddOtherCosting from './AddOtherCosting';
import PriceList from './PriceList';
import ReportOnReturnedDrugs from './ReportOnReturnedDrugs';
import SalesReportBacklog from './SalesReportBacklog';
import ReturnedBacklog from './ReturnedBacklog';
import ReturnedDrugsReports from './ReturnedDrugsReports';


const routes = [
    {
        path: '/transferDrugsFromOtherUnits',
        exact: true,
        main: () => <TransferDrugs />,
    },
    {
        path: '/requisitionToStore',

        main: () => <DrugRequisitionForm />,
    },
    {
        path: '/addDrugsFromOtherImpressAccount',
        exact: true,
        main: () => <AddDrugsImpressAccount />,
    },
    {
        path: '/transferDrugToOther',
        exact: true,
        main: () => <TransferDrugsToOther />,
    },
    {
        path: '/patientPrescriptionList',
        exact: true,
        main: () => <PendingPharmacyRequest />,
    },
    {
        path: '/drugDispensingForm',
        exact: true,
        main: () => <DrugDispensingForm />,
    },
    {
        path: '/inPatientDispensingForm',
        exact: true,
        main: () => <InPatientDrugDispensingForm />,
    },
    {
        path: '/recieveDrugFromStore',
        exact: true,
        main: () => <RecieveDrugFromStore />,
    },
    {
        path: '/returnedDrugs',
        exact: true,
        main: () => <ReturnedDrugs />,
    },
    {
        path: '/dailySalesReport',
        exact: true,
        main: () => <DailySalesReport />,
    },
    {
        path: '/salesReport',
        exact: true,
        main: () => <SalesReport />,
    },
    {
        path: '/upToDateStockBalance',
        exact: true,
        main: () => <UpToDateStockBalance />,
    },
    {
        path: '/inPatientSalesReport',
        exact: true,
        main: () => <InPatientSalesReport />,
    },
    {
        path: '/transferOtherUnitsReport',
        exact: true,
        main: () => <TransferOtherUnitsReport />,
    },
    {
        path: '/allRecievedDrugsReport',
        exact: true,
        main: () => <AllRecievedDrugsReport />,
    },
    {
        path: '/editDrugs',
        exact: true,
        main: () => <EditDrugs />,
    },
    {
        path: '/impressReport',
        exact: true,
        main: () => <ImpressReport />,
    },
    {
        path: '/requestIssueReport',
        exact: true,
        main: () => <RequestIssueReport />,
    },
    {
        path: '/onlineSalesReport',
        exact: true,
        main: () => <OnlineSalesReport />,
    },
    {
        path: '/transferFromOtherUnitsReport',
        exact: true,
        main: () => <TransferFromOtherUnitsReport />,
    },
    {
        path: '/backlog',
        exact: true,
        main: () => <BackLog />,
    },
    {
        path: '/deleteWrongPosting',
        exact: true,
        main: () => <DeleteWrongPosting />,
    },
    {
        path: '/addOtherCosting',
        exact: true,
        main: () => <AddOtherCosting />,
    },
    {
        path: '/priceList',
        exact: true,
        main: () => <PriceList />,
    },
    {
        path: '/reportOnReturnedDrugs',
        exact: true,
        main: () => <ReportOnReturnedDrugs />,
    },
    {
        path: '/salesReportBacklog',
        exact: true,
        main: () => <SalesReportBacklog />,
    },
    {
        path: '/returnedBacklog',
        exact: true,
        main: () => <ReturnedBacklog />,
    },
    {
        path: '/returnedDrugsReports',
        exact: true,
        main: () => <ReturnedDrugsReports />,
    },
]


class Pharmacy extends Component {
    render() {
        return(
            <Router>
                <div className="pharmacyModule row">
                    <div className="moduleItems col-md-2">
                        <div className="side-bar">
                            <h4>Pharmacy Unit</h4>
                            <div >
                                <ul style={{listStyle: 'none', padding: 0}}>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/transferDrugsFromOtherUnits">Transfer drugs from other units</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/requisitionToStore">Requisition to store</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/addDrugsFromOtherImpressAccount">Add drugs from impress account</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/transferDrugToOther">Transfer drugs to other units</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white", textAlign:'left'}} to="/patientPrescriptionList">Patient prescription list</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/drugDispensingForm">Drug Dispensing Form</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/inPatientDispensingForm">In-Patient dispense drugs form</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/recieveDrugFromStore">Recieve drug from store</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/returnedDrugs">Returned drugs</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/dailySalesReport">Daily Sales Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/salesReport">Sales Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/upToDateStockBalance">Up-To-Date Stock Balance</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/inPatientSalesReport">In-Patient Sales Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/transferOtherUnitsReport">Transfer to Other Units Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/allRecievedDrugsReport">All Recieved Drugs Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}} to="/editDrugs">Edit Drugs</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/impressReport">Impress Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/requestIssueReport">Request/Issue Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/onlineSalesReport">Online Sales Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/transferFromOtherUnitsReport">Transfer From Other Units Report</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/backlog">Backlog</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/deleteWrongPosting">Delete Wrong Posting</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/addOtherCosting">Add Other Costing</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/priceList">Price List</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/reportOnReturnedDrugs">Report on Returned Drugs</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/salesReportBacklog">Sales Report Backlog</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/returnedBacklog">Returned Backlog</NavLink></li>
                                <li><NavLink style={{textDecoration:"none", color:"white"}}to="/returnedDrugsReports">Returned Drugs Reports</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="moduleItemsContainer col-md-9">
                    <h2>Welcome to Theather Pharmacy Unit</h2><hr/>
                        {routes.map((route) => (
                            <Route 
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default Pharmacy;