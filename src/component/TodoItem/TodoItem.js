import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { Context } from "../../helpers/Context";

class TodoItem extends React.Component {
  static contextType = Context;

  render() {
    return (
      <li className={`task-list__item ${(this.props.el.completed === true) ? 'checked' : ''}`}>
        <div className='wrapper'>
          <InputGroup.Checkbox
            onChange={() => this.context.onToggle(this.props.el.id)}
            checked={this.props.el.completed}
            className="checkbox"
            aria-label="Checkbox for following text input"
          />
          <div className='text-wrap'> 
            {this.props.el.value} 
          </div>
        </div>
        <Button onClick={() => this.context.onRemove(this.props.el.id)} variant="outline-danger">&times;</Button>
      </li>
    );
  }
}

export default TodoItem;