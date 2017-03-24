import ActionTypes from './actionType'
import {browserHistory} from 'react-redux'
import * as db from '../../firebase/firebaseCnfg'




export function StdSignupRequest(signupData){
    return dispatch => {
dispatch(stdSignUpRequest());
db.auth.createUserWithEmailAndPassword(
    signupData.email,signupData.password
).then((data)=>{
    const userRoot = db.database.ref('/stdsignup/'+data.uid);

    userRoot.set({
        uid:data.uid,
        name:signupData.name,
        qualification:signupData.qualification,
        skills:signupData.skills,
        email:signupData.email,
       // password:data.password
    },
    signupSuccessData=>{
        dispatch(stdSignupRequestSuccess({

        uid:data.uid,
        name:signupData.name,
        qualification:signupData.qualification,
        skills:signupData.skills,
        email:signupData.email,
        //password:data.password

    }));
    localStorage.setItem('stdId',data.uid)
    alert('successfully signup')
   // browserHistory.push('main')

    }
    )
})

.catch((error)=>{
    alert('data ni gia')
    dispatch(stdSignupRequestFailed(error)
    );
})
console.log('fromm firebase',db)
    }
}



function stdSignUpRequest(){
    return{
        type:ActionTypes.stdSignupRequest
    }
};

function stdSignupRequestSuccess(data){
    return{
        type:ActionTypes.StdSignupRequestSuccess,
        data
    }
}
function stdSignupRequestFailed(data){
    return{
        type:ActionTypes.StdSignupRequestFailed
    }
}