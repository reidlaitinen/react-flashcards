import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';
import Card from './Card'

const List = ( {flashCards}) => (

    <Segment padded>
      { flashCards.map( card => 
        <div>
          <Divider horizontal>Card # {card.id}</Divider>
          <Card
            key={card.id}
            question={card.question}
            answer={card.answer}
          />
        </div>
      )}
    </Segment>

)

export default List;