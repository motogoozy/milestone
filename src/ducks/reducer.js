const initialState = {
   user: {}
}

//ACTION TYPES
const GET_USER_DATA = 'GET_USER_DATA'


//ACTION CREATORS
export function getUserData(userInfo) {
   return {
      type: GET_USER_DATA,
      payload: userInfo
   }
}





//REDUCER 
export default function reducer(state = initialState, action) {
   switch(action.type) {


      default: 
         return state;
   }
}