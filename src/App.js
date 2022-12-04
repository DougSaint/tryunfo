import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  leftPoints: 210,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.saveCard = this.saveCard.bind(this);
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
      parseInt(cardAttr1, 10) || 0,
      parseInt(cardAttr2, 10) || 0,
      parseInt(cardAttr3, 10) || 0,
    ];
    const validValues = atributtes.every((attr) => attr <= maxValidPoint && attr >= 0);
    const usedPoints = atributtes.reduce((curr, acc) => curr + acc);
    const validInputs = cardName.length > 0
     && cardDescription.length > 0 && cardImage.length > 0
      && cardRare.length > 0;

    this.setState({ leftPoints: maxAttrPoints - usedPoints });
    this.setState({
      isSaveButtonDisabled: !(validInputs && validValues && usedPoints <= maxAttrPoints),
    });
  };

  saveCard = (e) => {
    e.preventDefault();

    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prev) => ({ savedCards: [...prev.savedCards, card] }));
    this.setState({ ...INITIAL_STATE });
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
            onSaveButtonClick={ this.saveCard }
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
