import TodoList from './TodoList';
import React from 'react';
import { Input, Header } from 'semantic-ui-react';

export default class TodoInput extends React.Component {
    render() {
        const { list,handelChange, handleClick,deleteItem } = this.props;
        return (
            <div>
                < Header as='h1' color='blue' > ToDo List </Header>
                < Input 
                    action={
                        {
                            color: 'blue',
                            labelPosition: 'left',
                            icon: 'add',
                            content: 'Add',
                            onClick: ()=>this.props.handleClick()
                        }
                    }
                    actionPosition='right'
                    onChange= {this.props.handleChange}
                    placeholder='Add to todo list' />
                <TodoList list={this.props.list} 
                    deleteItem={this.props.deleteItem} />
            </div>
        )
    }
}
