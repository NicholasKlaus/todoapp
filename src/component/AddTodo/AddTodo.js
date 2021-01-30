import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {InputGroup,} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

class AddTodo extends React.Component { 
  state = {
    string:""
  }

  render(){
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">New task</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={event => this.setState({string: event.target.value})}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <Button
           onClick={() => this.props.onCreate({
              value: this.state.string,
              id: Date.now(),
              completed: false
            })}
            variant="outline-success"
          >
            Add
          </Button>
        </InputGroup>
      </div>
    )
  }
}

export default AddTodo;
