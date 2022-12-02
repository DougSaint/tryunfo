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
  leftPoints: 210,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSaveButtonDisabled: true,
      ...INITIAL_STATE,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  validateFields = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    const maxAttrPoints = 210;
    const maxValidPoint = 90;
    const atributtes = [
      parseInt(cardAttr1, 10),
      parseInt(cardAttr2, 10),
      parseInt(cardAttr3, 10),
    ];
    const validValues = atributtes.every((attr) => attr <= maxValidPoint && attr >= 0);
    const usedPoints = atributtes.reduce((curr, acc) => curr + acc);
    const validInputs = cardName.length > 0
     && cardDescription.length > 0 && cardImage.length > 0
      && cardRare.length > 0;

    this.setState({
      isSaveButtonDisabled: !(validInputs && validValues && usedPoints <= maxAttrPoints),
    });
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validateFields);
  };

  render() {
    return (
      <div className="app">
        <h1>Tryunfo</h1>
        <main className="container">
          <Form
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ this.isSaveButtonDisabled }
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
