import ActionTypes from '../action/actionType'



const intial_state={ };
export function applicationReducer(state =intial_state ,action){
    switch(action.type){
        case ActionTypes.loadInitialState:{
            return state;
        }
        case ActionTypes.CompanySignupRequest:{
            return state;
        }
    
        case ActionTypes.StdSignupRequestSuccess:{
            var stdsignup = Object.assign({},state,{user:action.data});
             state = stdsignup;
            return state;
        }
case ActionTypes.CompanySignupRequest:{
    var companysignup = Object.assign({},state,{user:action.data});
    state=companysignup;
    return state;
}
case ActionTypes.companyProfileRequest:{
var companyProfile = Object.assign({}, state,{user:action.data})
state = companyProfile;
return state;
}




        
        default:
         return state;
    }

}