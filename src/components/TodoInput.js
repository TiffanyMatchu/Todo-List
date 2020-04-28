import TodoList from './TodoList';
import React from 'react';
import {Input, Header} from 'semantic-ui-react';

export default class TodoInput extends React.Component {
    render() {
        const {item,handelChange,keyPressed}= this.props;
        return (
            <div>
                < Header as = 'h1' color = 'blue' > ToDo List </Header>
                < Input
                    action = {
                        {
                            color: 'blue',
                            labelPosition: 'left',
                            icon: 'add',
                            content: 'Add',
                        }
                    }
                    actionPosition = 'right'
                    placeholder = 'Add to todo list'/>
                            {/* <input type = 'text' placeholder = 'Hit enter to add item' 
                                value = {item}
                                onChange ={handelChange}
                                /> */}                          
                <TodoList/>
            </div>
        )
    }
}
