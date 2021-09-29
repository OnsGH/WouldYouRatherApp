import {RECEIVE_QUESTIONS, ADD_QUESTION,ADD_ANSWER_TO_QUESTION} from '../actions/questions'
import _DATA from '../utils/_DATA'

export default function questions(state = {}, action){


switch(action.type){

   case RECEIVE_QUESTIONS : 
    return {
    ...state,
    ...action.questions
    }


case ADD_QUESTION : 
 
        const { question } = action;
        return {
            ...state,
          [question.id]: question
        };
    

    case ADD_ANSWER_TO_QUESTION :
       const {authedUser, question_id, answer_question} = action
      return {
            ...state,
            [question_id]: {
              ...state[question_id],
              [answer_question]: {
                ...state[question_id][answer_question],
                votes: state[question_id][answer_question].votes.concat(authedUser)
              }
            }

            }
      

    default:
        return state
}



}