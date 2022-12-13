import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCard extends React.Component {
  constructor() {
    super();

    this.state = {
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
      disabledFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.filterRarity = this.filterRarity.bind(this);
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onInputChangeChekBox = ({ target: { name, checked } }) => {
    if (checked) {
      this.setState({ disabledFilter: true });
    } else {
      this.setState({ disabledFilter: false });
    }
    this.setState({ [name]: checked });
  };

  filterRarity = (cards) => {
    const { rareFilter, trunfoFilter } = this.state;
    if (trunfoFilter) return cards.filter((card) => card.cardTrunfo);
    if (rareFilter === 'todas') {
      return cards;
    }
    return cards.filter((card) => card.cardRare === rareFilter);
  };

  render() {
    const { cards, deleteCard } = this.props;
    const { nameFilter, rareFilter, trunfoFilter, disabledFilter } = this.state;
    return (
      <>
        <div className="d-flex">
          <label htmlFor="filter" className="d-flex filter">
            Nome
            <input
              name="nameFilter"
              type="text"
              data-testid="name-filter"
              onChange={ this.onInputChange }
              value={ nameFilter }
              disabled={ disabledFilter }
            />
          </label>

          <label htmlFor="rareFilter" className="d-flex filter">
            Raridade: &nbsp;&nbsp;
            <select
              data-testid="rare-filter"
              name="rareFilter"
              onChange={ this.onInputChange }
              value={ rareFilter }
              disabled={ disabledFilter }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoFilter" className="d-flex white">
            Super Trunfo
            <input
              name="trunfoFilter"
              type="checkbox"
              data-testid="trunfo-filter"
              value={ trunfoFilter }
              onChange={ this.onInputChangeChekBox }
            />
          </label>
        </div>
        <div className="container">

          {this.filterRarity(cards).filter((card) => card.cardName.includes(nameFilter))
            .map((card) => (<Card
              { ...card }
              key={ card.id }
              deleteButton
              deleteCard={ deleteCard }
            />))}
        </div>
      </>
    );
  }
}

ListCard.propTypes = {
  cards: PropTypes.array,
  deleteCard: PropTypes.func,
}.isRequired;
