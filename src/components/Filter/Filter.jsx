import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, filterChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={filterChange}
      placeholder="Search..."
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
