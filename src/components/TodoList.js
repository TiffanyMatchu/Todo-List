import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { List,Segment} from 'semantic-ui-react';

export default class TodoList extends Component {
    render() {
        const {list,deleteItem}  = this.props;
        const isEmpty = Array.isArray(this.props.list);
        return (
            
            <div>  
                { isEmpty ?     
                <List celled verticalAlign='middle'>
                        {this.props.list.map((item,index) => {
                            return (<List.Item>
                               <TodoItem item={item} 
                                 index ={index} 
                                 deleteItem={this.props.deleteItem}
                               />
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
