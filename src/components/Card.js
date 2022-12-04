import PropTypes from 'prop-types';
import React from 'react';

export default class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
    } = this.props;
    return (
      <section className="main-card">
        <div className="card-head">
          <h3 data-testid="name-card" className="name-card">{cardName}</h3>
        </div>
        <p data-testid="rare-card" className="rarity">{cardRare}</p>
        <img
          className="image-card"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div className="desc">
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="attributes">
          <p>
            ATK:
            <span data-testid="attr1-card">{cardAttr1}</span>
          </p>
          <p>
            HP:
            <span data-testid="attr2-card">{cardAttr2}</span>
          </p>
          <p>
            DEF:
            <span data-testid="attr3-card">{cardAttr3}</span>
          </p>
        </div>
        {cardTrunfo
        && <p data-testid="trunfo-card" className="super-trunfo">Super Trunfo</p>}
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.any,
}.isRequired;
