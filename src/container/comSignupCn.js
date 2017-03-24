import { connect } from 'react-redux';
import CompanySignUp from '../components/comSignup';
import { loadInitialState } from '../store/action/loadintialstate';
import  {CompanySignupRequest }from '../store/action/comSignupAct';


function mapStateToProps(state) {
  
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    companysignupRequest       : (data) => dispatch(CompanySignupRequest(data))
  };
}

const CompanySignUpContainer = connect(mapStateToProps, mapDispatchToProps)(CompanySignUp);

export default CompanySignUpContainer;