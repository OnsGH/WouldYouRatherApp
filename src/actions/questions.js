import { _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION '


export function receiveQuestions(questions){
return {
    type : RECEIVE_QUESTIONS,
    questions,


}
}

export function addQuestion(question){
return {
    type : ADD_QUESTION,
    question,
}

}

export function addAnswerToQuestion(authedUser, question_id, answer_question ){
    return {
        TYPE: ADD_ANSWER_TO_QUESTION,
        authedUser,
        question_id,
        answer_question
    }

}

export function handleAddQuestion(optionOneText, optionTwoText, author){
    return (dispatch) => {
       
        return _saveQuestion ({
          optionOneText,
          optionTwoText, 
          author })
 .then ((question) => dispatch(addQuestion(question)))
}
}

