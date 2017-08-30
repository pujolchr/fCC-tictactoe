import React from 'react';
import PropTypes from 'prop-types';

const SYMBOL = {
  O: 'fa-circle-o',
  X: 'fa-times',
};

function Square(props) {
  return (
    <td>
      <button
        className="square"
        onClick={() => props.onClick(`> play ${props.value}`)}
      >
        <i className={`fa ${SYMBOL[props.text]}`} aria-hidden="true" />
      </button>
    </td>
  );
}
Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Square;
