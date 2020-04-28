import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "semantic-ui-css/semantic.min.css"; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      list: []
    };
  }
  handleChange = (e) => {
     this.setState({
       item: e.target.value
      });
       }
  keyPressed = e => {
    if (e.key === "Enter") {
      this.setState(p => ({
        list: [...p.list, p.item],
        item: ''
      }));
    }
  }
  render(){
    return (
      <div className="App">
    
    <TodoInput 
      item={this.state.item}
      handleChange = {this.handleChange}
      keyPressed = {this.keyPressed}
    />
    <TodoList/>
    </div>
  );
  }
}

export default App;
