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
    this.handleClick = this.handleClick.bind(this);
  }

  invalidInput() {
    this.setState({
      inputBarText: ''
    });
  }

  handleClick(e) {
    const { groceryItems } = this.state;
    const indexOfDelete = groceryItems.indexOf(e.target.value.trim());
    const newItemList = groceryItems;
    newItemList.splice(indexOfDelete, 1);
    this.setState({
      groceryItems: newItemList
    });
  }

  handleChange(e) {
    const inputBarText = {};
    inputBarText[e.target.name] = e.target.value;
    this.setState(inputBarText);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputBarText, groceryItems } = this.state;
    const correctedText = inputBarText.replace(/\s+/g, ' ').trim();
    if (correctedText) {
      if (groceryItems.includes(correctedText)) {
        this.invalidInput();
        return;
      }
      const updatedGroceryItems = [...groceryItems, ...[correctedText]];
      this.setState(
        {
          groceryItems: updatedGroceryItems,
          inputBarText: ''
        },
        () => {
          const scrollToBottom = document.getElementById('formList');
          scrollToBottom.scrollTop = scrollToBottom.scrollHeight;
        }
      );
    } else {
      this.invalidInput();
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
          <List groceryItems={groceryItems} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
