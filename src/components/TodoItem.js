import React, { Component } from 'react';
import { List, ListHeader, Image, ListContent, Button } from 'semantic-ui-react';
export default class TodoItem extends Component {
    render() {
        const item = this.props;
        return (
            <div>
                <List.Content>{this.props.item}</List.Content>
                <List.Content floated='right'>
                    <Button color='red'>Delete</Button>
                </List.Content>
            </div>
        )
    }
}
