import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='task-list'>
        {this.props.data.map((el, key) => {
          return (
            <TodoItem 
              el={el} 
              key={key} 
            />
          )
        })}
      </ul>
    );
  }
}

export default TodoList;