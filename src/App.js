import React, { Component } from 'react';
import './App.css';
import List from './List'
import {Segment, Container, Header} from 'semantic-ui-react';

class App extends Component {
  state = {
    flashCards: [
      {id: '1', side: true, question: 'Where do you set state?', answer: "Not in render, at least!"},
      {id: '2', side: true, question: "What's the most commonly used lifecycle method?", answer: "componentDidMount()"},
      {id: '3', side: true, question: "Which lifecycle method do we use for cleanup?", answer: "componentWillUnmount()"},
      {id: '4', side: true, question: "What datatype is state?", answer: "Object"},
      {id: '5', side: true, question: "____ are read-only, passed from parent to child", answer: "props"}
    ]
  }

  editCard = (id) => {

  }

  deleteCard = (id) => {
    const {flashCards} = this.state;
    let newArr= flashCards.filter( card => {
      return card.id !== id
    })
    this.setState({flashCards: newArr})
  }

  render() {
    return (
      <div className="App">
        <Segment padded>
          <Container textalign='center'>
            <Header as='h1'>React.js Flashcards</Header>
          </Container>
        </Segment>
        <div>
          <List 
            flashCards={this.state.flashCards}
            editCard={this.editCard}
            deleteCard={this.deleteCard}
          />

        </div>
      </div>
    );
  }
}

export default App;
