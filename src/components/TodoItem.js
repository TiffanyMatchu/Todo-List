import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';
export default class TodoItem extends Component {
    render() {
        const {item,index,deleteItem} = this.props;
        return (
            <div>
                <List.Content>{this.props.item}</List.Content>
                <List.Content floated='right'>
                    <Button color='red'
                     onClick={()=>this.props.deleteItem(this.props.index)}>Delete</Button>
                </List.Content>
            </div>
        )
    }
}
