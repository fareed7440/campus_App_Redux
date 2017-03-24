import ActionTypes from './actionType'
 import * as db from '../../firebase/firebaseCnfg'
 import {browserHistory} from 'react-router'

 export function CompanySignupRequest(signupData){
     return dispatch =>{
         dispatch(companysignupRequest());
         db.auth.createUserWithEmailAndPassword(
             signupData.email,signupData.password
         ).then((data)=>{
             const userRoot = db.database.ref('/company/'+data.uid).set({
                 uid:data.uid,
                 name:signupData.name,
                 experience:signupData.experience,
                 about:signupData.about,
                 email:signupData.email
                 
             },
             
             //  firebase.database.ref('company').push(userRoot),
             signupSuccessData => {
                    dispatch(companySignupRequestSuccess({ 
                        uid:data.uid,
                 name:signupData.name,
                 experience:signupData.experience,
                 about:signupData.about,
                 email:signupData.email
}));
                  //  localStorage.setItem("companyId",data.uid);
                    alert("Company SuccessFull SignUp")
                   browserHistory.push('companyprofile')
                    
                }).catch((err)=>{
                    console.log(err)
                });
            })
            .catch((error) => {
                alert("Error Occurred Please try again.");
                dispatch(companySignupRequestFailed(error));
            });
        // console.log("Hme firebase se ye mila" +fbConfigs.fbAuth.email)
        console.log("firebase data" ,db)
    }
}

function companysignupRequest() {
    return {
        type: ActionTypes.CompanySignupRequest
    };
}


function companySignupRequestSuccess(data) {
    return {
        type: ActionTypes.CompanySignupRequestSuccess,
        data
    };
}

function companySignupRequestFailed() {
    return {
        type: ActionTypes.CompanySignupRequestFailed
    };
}
             
             
            