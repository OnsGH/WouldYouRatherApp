import react, {Component} from 'react'
import {Card, Image, Button} from  'semantic-ui-react'

class CardDetails extends Component {


  

      render(){
        const data = this.props
      console.log ('PROPS ',data)
       return (

        <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={this.props.avatar}
          />
          <Card.Header>{data.userName}</Card.Header>
          
          <Card.Description>
            {data.optOne}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui one buttons'>
            <Button basic color='green'>
              View Poll
            </Button>
           
          </div>
        </Card.Content>
      </Card>
       )

      }







}

export default CardDetails