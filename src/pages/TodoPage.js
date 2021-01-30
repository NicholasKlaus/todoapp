import React,{ useState, useEffect } from "react";
import TodoList from "../component/TodoList/TodoList";
import AddTodo from "../component/AddTodo/AddTodo";
import { Context } from "../Context";

class TodoPage extends React.Component {
  state = {
    arr:[
      {
        id: 1,
        value: "Play World of Tanks with friends",
        completed: false,
      },
      {
        id: 2,
        value: "Go to the gas station to refuel the car",
        completed: false,
      },
      {
        id: 3,
        value: "Finish reading the book",
        completed: false,
      },
    ]
  }

  componentDidMount(){
    localStorage.setItem('tasks', JSON.stringify(this.state.arr));
  }

  componentDidMount(){
    const tasks = localStorage.getItem('tasks' ? JSON.parse(localStorage.getItem('tasks')) : []);
    this.setState({ tasks: tasks})
  }

  toggleTodo = (id) => {
    this.setState(
      this.state.arr.map(el => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  }

  del = (id) => {
    this.setState({arr: this.state.arr.filter(el => el.id !== id)})
  }

  addTodo = (value) => {
    this.setState({arr: [...this.state.arr, value]})
  }

  render(){
    return(
      <Context.Provider value= {
        [this.del, this.toggleTodo]
      }>
        <div className="todo">
          <div className='container' >
            <header className="header">
              <div className="head-wrap">
                <h1>Todo App</h1>
              </div>
            </header>
            <AddTodo onCreate={this.addTodo} />
            <TodoList data={this.state.arr} onToggle={this.toggleTodo} removeTask={this.del} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}
export default TodoPage;