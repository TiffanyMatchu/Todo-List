import React from 'react';
import TodoInput from './components/TodoInput';
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
    this.handleChange.bind(this);
    this.handleClick.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  }
  handleClick = () => {
      this.setState(p => ({
        list: [...p.list, p.item],
      }));   
  }
  deleteItem = id => {
    const list = [...this.state.list];
    const newList = list.filter((item, index) => {
      return index !== id;
    });
    this.setState({ list: newList });
  }
  render() {
    return (
      < div class="ui center aligned container" >
        <TodoInput
          list={this.state.list}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          deleteItem={this.deleteItem}
        />
  
      </div>
    );
  }
}

export default App;
