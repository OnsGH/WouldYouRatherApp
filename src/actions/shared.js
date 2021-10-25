import { getInitialData } from '../utils/_DATA.js'
import { receiveUsers } from '../actions/users'
import { receiveQuestions} from '../actions/questions'


export function handleInitilData(){

return (dispatch) => {
   
    return getInitialData()
    .then(
        ({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
           
           
        }
    )

}
// when we receive our users and questions, we want to dispatch AUTHED user
// next step is set up the reducers to modify our state based on these actions

}