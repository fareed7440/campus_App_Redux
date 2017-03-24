import {connect} from 'react-redux'
import StdSignup from '../components/stdSignup'
import {loadInitialState}  from '../store/action/loadintialstate'
import {StdSignupRequest} from '../store/action/stdSignup'


     const mapStateToProps=(state)=>{
     return{
         application:state.application
     }
     }


 const mapDispatchToProps=(dispatch)=>{
     return{
     loadInitialState: () => dispatch(loadInitialState()),
    stdSignUpRequest: (data)=>dispatch(StdSignupRequest(data))
     }
     }


     const Stdsignupcontainer = connect(mapStateToProps,mapDispatchToProps)(StdSignup)
     export default Stdsignupcontainer;
