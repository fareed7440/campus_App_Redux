import { connect } from 'react-redux';
import CompanyProfile from '../components/companyProfile';
import { loadInitialState } from '../store/action/loadintialstate';
import {CompanyProfileRequest} from '../store/action/comProfileAct'


function mapStateToProps(state) {

  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
     companyProfileRequest  : () => dispatch(CompanyProfileRequest()),
    
  };
}

const CompanyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);

export default CompanyProfileContainer;