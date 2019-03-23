/* eslint-env browser */
import React from 'react';
import Input from './Input';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBarText: '',
      groceryItems: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const inputBarText = {};
    inputBarText[e.target.name] = e.target.value;
    this.setState(inputBarText);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputBarText, groceryItems } = this.state;
    if (inputBarText) {
      const updatedGroceryItems = [...groceryItems, ...[inputBarText]];
      this.setState({
        groceryItems: updatedGroceryItems,
        inputBarText: ''
      });
    }
  }

  render() {
    const { inputBarText, groceryItems } = this.state;
    return (
      <div className="everything">
        <div className="leftSide">
          <div className="title">
            <h1>A Very Nice Grocery List!</h1>
            <img src="Logo.png" alt="Grocery List" />
            <Input
              handleChange={this.handleChange}
              inputBarText={inputBarText}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="rightSide">
          <List inputBarText={inputBarText} groceryItems={groceryItems} />
        </div>
      </div>
    );
  }
}

export default App;
