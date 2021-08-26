import * as actionTypes from "./authTypes"

const token = localStorage.getItem("token") || null


const INITIAL_STATE = {
    isSignedIn: token===null ? false : true,
    
}


const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case actionTypes.SIGN_IN:
            return{
                ...state,
                isSignedIn: true

            }

        case actionTypes.SIGN_OUT:
            return{
                ...state,
                isSignedIn: false,
                // write token to null in logout function
                
            }

        default:
            return state;

    }

}

export default authReducer;