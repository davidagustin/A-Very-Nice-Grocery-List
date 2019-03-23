import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputBarText, handleChange, handleSubmit }) => {
  return (
    <div className="inputText">
      <form>
        <label htmlFor="inputGrocery">
          Add Grocery:
          <br />
          <input
            type="input"
            id="inputGrocery"
            name="inputBarText"
            value={inputBarText}
            onChange={handleChange}
            autoComplete="off"
          />
          <br />
          <input type="button" onClick={handleSubmit} value="Submit" />
        </label>
      </form>
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputBarText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Input;
