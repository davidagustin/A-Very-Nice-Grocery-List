/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';
import ListItems from './ListItems';

const List = ({ groceryItems, handleClick }) => {
  return (
    <div>
      <div className="list" id="formList">
        <div className="listTitle">Grocery Items:</div>
        <ListItems groceryItems={groceryItems} handleClick={handleClick} />
      </div>
      <p className="smallText">Note: Click on item to delete.</p>
    </div>
  );
};

List.defaultProps = {
  groceryItems: []
};

List.propTypes = {
  groceryItems: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired
};

export default List;
