import React from 'react';
import {Container, Button} from 'semantic-ui-react';

const Card = ({ id, text, flipCard}) => (
  <Container textalign='center'>
    {text}
    <br/><br/>
    <Button centered onClick={this.flipCard}>Flip Card</Button>
  </Container>

)

export default Card;