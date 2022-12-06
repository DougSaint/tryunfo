import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCard extends React.Component {
  constructor() {
    super();

    this.state = {
      nameFilter: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { cards, deleteCard } = this.props;
    const { nameFilter } = this.state;
    return (
      <>
        <label htmlFor="filter" className="d-flex filter">
          Filtro de busca
          <input
            name="nameFilter"
            type="text"
            data-testid="name-filter"
            onChange={ this.onInputChange }
            value={ nameFilter }
          />
        </label>

        <div className="container">
          {cards.filter((card) => card.cardName.includes(nameFilter))
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
