import React from 'react';
import {Container, Button} from 'semantic-ui-react';

class Card extends React.Component {
  state = {side: false, text: 'wat'}


  flipCard = () => {
    this.setState({
      side: !this.state.side
    })
  }

  render() {
    if (this.state.side) {
      return (
        <Container textalign='center'>
          {this.props.answer}
          <br/><br/>
          <Button centered onClick={() => this.props.deleteCard(this.props.cardId)}>Delete Card</Button>
          <Button centered onClick={this.flipCard}>Flip Card</Button>
          <Button centered onClick={() => this.props.editCard(this.props.cardId)}>Edit Card</Button>
        </Container>
      )
    } else {
      return (
        <Container textalign='center'>
          {this.props.question}
          <br/><br/>
          <Button centered onClick={this.flipCard}>Flip Card</Button>
        </Container> 
      )
    }
  }
}

export default Card;