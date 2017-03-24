import ActionTypes from './actionType'


export function loadInitialState(){
    return dispatch => {
dispatch(loadinitialStateAction())
    }
}


function loadinitialStateAction(){
    return dispatch=>{
        type:ActionTypes.loadInitialState
    }
}