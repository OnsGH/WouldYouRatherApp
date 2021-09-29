import { getInitialData } from '../utils/_DATA.js'
import { receiveUsers } from '../actions/users'
import { receiveQuestions} from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
//mport { showLoading, hideLoading } from 'react-redux-loading'
const AUTHED_ID = 'tylermcginnis'

export function handleInitilData(){

return (dispatch) => {
   // dispatch(showLoading())
    return getInitialData()
    .then(
        ({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
           // dispatch(hideLoading())
        }
    )

}
// when we receive our users and questions, we want to dispatch AUTHED user
// next step is set up the reducers to modify our state based on these actions

}