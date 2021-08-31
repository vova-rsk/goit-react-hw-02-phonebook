import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ filter, onInputChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onInputChange}
        value={filter}
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onInputChange: PropTypes.func.isRequired,
};
