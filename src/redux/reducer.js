const initialState = {
    userName: '',
    profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
} 

export function logout(){
    return {
        type: LOGOUT
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USER:
            return {initialState: {userName: user, profilePic: user}}
        case LOGOUT:
            return initialState = {userName: '', profilePic: ''}
    }
}