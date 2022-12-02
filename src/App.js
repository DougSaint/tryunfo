import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <main className="container">
          <Form
            onInputChange={ this.onInputChange }
            { ...this.state }

          />
          <Card
            { ...this.state }
          />
        </main>
      </div>
    );
  }
}

export default App;
