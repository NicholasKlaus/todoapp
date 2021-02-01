import React from 'react';
import { 
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';


class AddTodo extends React.Component { 
  state = {
    newTask:""
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">New task</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            onChange={event => this.setState({newTask: event.target.value})}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
          <InputGroup.Append>
            <Button
              onClick={() => this.props.onCreate({
                value: this.state.newTask,
                id: Date.now(),
                completed: false
              })}
              variant="outline-success"
            >
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}

export default AddTodo;
