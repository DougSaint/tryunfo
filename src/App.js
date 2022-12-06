import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';
import ListCard from './components/ListCard';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  leftPoints: 210,
  cardTrunfo: false,
  hasTrunfo: false,
};

class App extends React.Component {
  id = 0;

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
    this.id += 1;
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
      id: this.id,
    };
    this.setState(
      (prev) => ({ savedCards: [...prev.savedCards, card] }),
      this.attSuperTrunfo,
    );
    this.setState({ ...INITIAL_STATE });
  };

  deleteCard = (id) => {
    this.setState((prev) => ({ savedCards: prev.savedCards
      .filter((card) => card.id !== id) }), this.attSuperTrunfo);
  };

  attSuperTrunfo = () => {
    const { savedCards } = this.state;
    if (savedCards.some((card) => card.cardTrunfo)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  onInputChange = ({ target: { name, value, checked } }) => {
    if (name === 'cardTrunfo') {
      this.setState({ [name]: checked }, this.validateFields);
    } else {
      this.setState({ [name]: value }, this.validateFields);
    }
  };

  render() {
    const { savedCards } = this.state;
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
        <h1>Lista de cartas</h1>
        <ListCard cards={ savedCards } deleteCard={ this.deleteCard } />
      </div>
    );
  }
}

export default App;
