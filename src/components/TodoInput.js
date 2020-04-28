import TodoList from './TodoList';
import React from 'react';
import {Form} from 'semantic-ui-react';

export default class TodoInput extends React.Component {
    render() {
        return (
            < div > 
                <Form>
                    <Form.Field >
                        <h3> Add Item </h3> 
                        <input placeholder = 'Hit enter to add item' />
                    </Form.Field > 
                </Form>
                <TodoList/>
            </div>
        )
    }
}
