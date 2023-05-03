import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};

Square.defaultProps = {
  value: null,
  onSquareClick: '',
};
