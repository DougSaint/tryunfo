import React from 'react';
import PropTypes from 'prop-types';

export default class SuperTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label className="d-flex" htmlFor="trunfo-input">
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
        {' '}
      </label>
    );
  }
}

SuperTrunfo.propTypes = {
  onInputChange: PropTypes.func,
  cardTrunfo: PropTypes.any,
}.isRequired;
