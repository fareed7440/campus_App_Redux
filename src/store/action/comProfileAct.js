import ActionTypes from './actionType'
import * as db from '../../firebase/firebaseCnfg'

export function CompanyProfileRequest(comProfile){
    return dispatch =>{
dispatch(companyProfileRequest());
return db.database.ref('/company').once('value',snapshot=>{
    const comp = [];
    snapshot.forEach(childSnapshot=>{
        comp.push(snapshot.val());
        console.log('eeeeeeeeee',comp)
//         var inComp = childSnapshot.val();
//         inComp.key = childSnapshot.key;

//         if(childSnapshot.hasChild('cccccc')){
//             var ccccc = Object.keys(childSnapshot.val().cccccc).map(key=>{
//                 return {
//                     key:childSnapshot.val().cccccc[key]
//                 }
//             })

//             inComp.cccccc = ccccc;
//             comp.push(inComp)
//             console.log('eeeeee',comp);
//         }
//         else{
// comp.push(inComp)
//         }


    })

    dispatch(companyProfileRequestSuccesss(comp));
})
    }
}           



function companyProfileRequest(){
    return{
type:ActionTypes.CompanyProfileRequest
}}

function companyProfileRequestSuccesss(data){
    return{
        type:ActionTypes.CompanyProfileRequestSuccess,
        data
    }
}