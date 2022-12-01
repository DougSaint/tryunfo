import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() { 
      const { cardName, 
        cardDescription, 
        cardAttr1, 
        cardAttr2, 
        cardAttr3, 
        cardImage, cardRare, 
        cardTrunfo, 
        hasTrunfo, 
        isSaveButtonDisabled, 
        onInputChange, 
        onSaveButtonClick } = this.props
    return (
      <form >
        <label htmlFor="name" className="column">
          Nome
          <input type="text" 
          data-testid="name-input" 
          name="name" 
          value ={cardName}
          onChange ={onInputChange}
          />
        </label>
        <label htmlFor="description" className="column">
          Descrição
          <textarea 
          name="description" 
          data-testid="description-input" 
          value = {cardDescription}
          onChange = {onInputChange}
          />
        </label>
        <label htmlFor="attr1" className="d-flex">
          Attr01
          <input 
          type="number" 
          data-testid="attr1-input" 
          name="attr1" 
          value = {cardAttr1} 
          onChange ={onInputChange}
          />
        </label>
        <label htmlFor="attr2" className="d-flex">
          Attr02
          <input 
          type="number" 
          data-testid="attr2-input" 
          name="attr2" 
          value = {cardAttr2}
          onChange ={onInputChange}
          />
        </label>
        <label htmlFor="attr3" className="d-flex">
          Attr03
          <input type="number" 
          data-testid="attr3-input" 
          name="attr3" 
          value = {cardAttr3}
          onChange ={onInputChange}
          />
        </label>
        <p> Pontos restantes </p>
        <label className="d-flex" htmlFor="image">
          Image
          <input 
          type="text" 
          name="image" 
          data-testid="image-input" 
          value = {cardImage}
          onChange = {onInputChange}
          />
        </label>
        <label htmlFor="Rarity">
          Raridade
          <select 
          data-testid="rare-input" 
          name="rarity" 
          onChange ={onInputChange}
          value = {cardRare}
          >
            <option value ="normal">Normal</option>
            <option value ="raro">Raro</option>
            <option value ="muito raro">Muito raro</option>
          </select>
        </label>
        <label className="d-flex" htmlFor="trunfo-input">
          <input 
          type="checkbox" 
          data-testid="trunfo-input" 
          id="trunfo-input" 
          checked ={cardTrunfo}
          onChange = {onInputChange}
          />
          Super Trybe Trunfo
        </label>
        <button 
        data-testid="save-button" 
        className="btn" 
        type="button"
        disabled ={isSaveButtonDisabled}
        onClick = {onSaveButtonClick}
        > Salvar </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.any,
  hasTrunfo: PropTypes.any,
  isSaveButtonDisabled: PropTypes.any,
  onInputChange: PropTypes.any,
  onSaveButtonClick: PropTypes.any
}.isRequired
