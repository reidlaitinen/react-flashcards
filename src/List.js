import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import Card from './Card'

class List extends React.Component {
  
  render() {
    return (
      <Segment padded>
        { this.props.flashCards.map( card => 
          <div key={card.id}>
            <Divider horizontal>Card # {card.id}</Divider>
            <Card
              key={card.id}
              cardId={card.id}
              question={card.question}
              answer={card.answer}
              deleteCard={this.props.deleteCard}
              editCard={this.props.editCard}
            />
          </div>
        )}
      </Segment>
    )
  }
}

export default List;