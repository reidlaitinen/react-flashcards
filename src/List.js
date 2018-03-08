import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import Card from './Card'

const List = ( {flashCards, flipCard}) => (

    <Segment padded>
      { flashCards.map( card => 
        <div>
          <Divider horizontal>Card # {card.id}</Divider>
          <Card
            key={card.id}
            text={card.question}
            flipCard={flipCard}
          />
        </div>
      )}
    </Segment>

)

export default List;