/* eslint-env browser */
import React from 'react';

import PropTypes from 'prop-types';

let numericalId = 0;
const uniqueId = () => {
  numericalId += 1;
  return numericalId;
};

const ListItems = ({ groceryItems, handleClick }) => {
  const mappedItems = groceryItems.map(item => {
    const id = uniqueId();
    return (
      <li key={id}>
        <input
          type="button"
          className="listItems"
          value={`${item} `}
          name="listItem"
          onClick={handleClick}
        />
      </li>
    );
  });
  return <ul>{mappedItems}</ul>;
};

ListItems.defaultProps = {
  groceryItems: []
};

ListItems.propTypes = {
  groceryItems: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired
};

export default ListItems;
