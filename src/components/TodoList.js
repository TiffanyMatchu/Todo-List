import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { List, Button,Segment} from 'semantic-ui-react';

export default class TodoList extends Component {
    render() {
        const { list } = this.props;
        const isEmpty = Array.isArray(this.props.list);
        return (
            
            <div>  
                { isEmpty ?     
                <List celled verticalAlign='middle'>
                        {this.props.list.map(item => {
                            return (<List.Item>
                               <TodoItem item={item}/>
                            </List.Item>);})
                            }
                </List>
                :
                <Segment> No items in Array</Segment>
             }
            </div>
        )
    }
}
