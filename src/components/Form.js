import React from 'react';
import PropTypes from 'prop-types';
import SuperTrunfo from './SuperTrunfo';

export default class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage, cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      leftPoints,
      savedCards } = this.props;

    const findSuper = savedCards.some((card) => card.cardTrunfo);
    const defaultMessage = (
      <p className="warning">
        Você já tem um Super Trunfo em seu baralho
      </p>);

    return (
      <form>
        <label htmlFor="name" className="column">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description" className="column">
          Descrição
          <textarea
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1" className="d-flex">
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2" className="d-flex">
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3" className="d-flex">
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <p>
          {' '}
          Pontos restantes :
          {leftPoints}
        </p>
        <label className="d-flex" htmlFor="image">
          Image
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Rarity">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        { findSuper ? defaultMessage
          : <SuperTrunfo onInputChange={ onInputChange } cardTrunfo={ cardTrunfo } />}
        <button
          data-testid="save-button"
          className="btn"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          {' '}
          Salvar
          {' '}
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.any,
  isSaveButtonDisabled: PropTypes.func,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.any,
}.isRequired;
