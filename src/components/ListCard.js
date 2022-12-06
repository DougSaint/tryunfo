import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class ListCard extends React.Component {
  render() {
    const { cards, deleteCard } = this.props;
    return (
      <div className="container">
        {cards.map((card) => (<Card
          { ...card }
          key={ card.id }
          deleteButton
          deleteCard={ deleteCard }
        />))}
      </div>
    );
  }
}

ListCard.propTypes = {
  cards: PropTypes.array,
  deleteCard: PropTypes.func,
}.isRequired;
