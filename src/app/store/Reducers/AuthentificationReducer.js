const defaultState = {
    isAuthorised:false,
    user:{
        username:"",
        email:"",
        password:""
    }
}

export const AuthentificationReducer = (state=defaultState,action) => {
    switch(action.type){
        case "SET_ISAUTHORISED":
            return {...state,isAuthorised:action.payload};
        case "SET_USER":
            return {...state,user:action.payload}
        default:
            return state;
    }
} 


export const setIsAuthorised = (isAuthorisedNew) => {
    return {type:"SET_ISAUTHORISED",payload:isAuthorisedNew}
}

export const setUser = (userNew) =>{
    return {type:"SET_USER",payload:userNew}
}