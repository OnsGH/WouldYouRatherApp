import React, { Component } from 'react'
import {Tab, Image, Card} from 'semantic-ui-react'
import { connect } from 'react-redux'
import CardDetails from './CardDetails'


 export  class Home extends Component {

    render() {
        const id='sarahdo'
        const { data,users } = this.props;
        console.log ('DATA', data)
        //console.log('AVATAR ',users)
        return <Tab panes={panes({ data, users })}  />;
      }
    



}

const panes = (props)=> {

const {data,users} = props;

return [
{
menuItem : 'Unanswered', render: () =>  (
    <Tab.Pane>
     <Card.Group>
     {
     data.unansweredQuestions.map(question => (
          console.log('users',users),
     <CardDetails key={question.id} question_id = {question.id}
     unanswered={true}  optOne = {question.optionOne.text} optTwo = {question.optionTwo.text} user_id = {question.author} avatar={users[question.author].avatarURL} userName={users[question.author].name}/>
     ))}
     </Card.Group> 
    </Tab.Pane>
     )
},

{
menuItem : 'Answered', render: () =>  <Tab.Pane>Answered</Tab.Pane>
}  
];

}
function mapStateToProps({ authedUser, users, questions }) {
    const answeredIds = Object.keys(users[authedUser].answers);
    
    const unansweredQuestions = Object.values(questions)
      .filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  
   const answeredQuestions = Object.values(questions)
   .filter((question) => {
    return Object.keys(users[authedUser].answers).find(
    (userQuestion) => userQuestion === question.id)})
    .sort((a, b) => b.timestamp - a.timestamp);
    
    console.log('answeredQuestions', answeredQuestions)
    console.log('USERS', users)
    return {
      users,
      data: {
        answeredQuestions,
        unansweredQuestions,
       // answeredQuestions
      }
    };
  }
  
  export default connect(mapStateToProps)(Home);