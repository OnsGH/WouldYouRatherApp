// Action type

export const RECEIVE_USERS = 'RECEIVE_USERS'

// RECEIVE Action creator

export function receiveUsers(users){
return {

    type : RECEIVE_USERS,
    users,
}

}