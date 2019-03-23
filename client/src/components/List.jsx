import React from 'react';
import PropTypes from 'prop-types';
import ListItems from './ListItems';

const List = ({ groceryItems }) => {
  return (
    <div className="list">
      <div className="listTitle">Grocery Items:</div>
      <ListItems groceryItems={groceryItems} />
    </div>
  );
};

List.defaultProps = {
  groceryItems: []
};

List.propTypes = {
  groceryItems: PropTypes.arrayOf(PropTypes.string)
};

export default List;
