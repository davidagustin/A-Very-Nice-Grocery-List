import React from 'react';

import PropTypes from 'prop-types';

let numericalId = 0;
const uniqueId = () => {
  numericalId += 1;
  return numericalId;
};

const ListItems = ({ groceryItems }) => {
  const mappedItems = groceryItems.map(item => {
    return <input type="button" className="listItems" key={uniqueId()} value={`${item} `} />;
  });
  return <form>{mappedItems}</form>;
};

ListItems.defaultProps = {
  groceryItems: []
};

ListItems.propTypes = {
  groceryItems: PropTypes.arrayOf(PropTypes.string)
};

export default ListItems;
