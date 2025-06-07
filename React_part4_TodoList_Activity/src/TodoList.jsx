//   https://react.dev/learn/updating-arrays-in-state
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function TodoList() {
    let my={
      marginBottom:"1rem"
    }

    let [todos, setTodos] = useState([{task:"SAMPLE-TASK", id:uuidv4(), isDone: false}]);
    let [newTodo, setNewTodos] = useState("");

    let addNewTask = () =>{
      // setNewTodos(newTodo);
      console.log(newTodo);
      setTodos( (prevTodos) =>{
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone:false }];
      })

      setNewTodos("");
    }

    let updateTodo = (event)=>{
      // console.log(event.target);
      // console.log(event.target.value);
      setNewTodos(event.target.value);
    }

    let TaskDeleted =(id)=>{
      // let check = (todos.filter((todo) =>todo.id!=id))
      // console.log(check);
      setTodos(todos.filter((todo) =>todo.id!=id))
    }

    let upperCaseAll =() =>{
      const updatedTodos = todos.map((todo) => {
        // console.log(todo.task.toUpperCase());
        return { ...todo, task: todo.task.toUpperCase() };
      });
      setTodos(updatedTodos);
    }

    let upperCaseOne = (id) =>{
      const updatedTodo = todos.map((todo) => {
        // console.log(todo.task.toUpperCase());
        if(id=== todo.id){
          return { ...todo, task: todo.task.toUpperCase() };
        }
        return todo;
      });
      setTodos(updatedTodo);
    }

    let MarkAsDone = (id) =>{
      const updatedTodo = todos.map((todo) => {
        // console.log(todo.task.toUpperCase());
        if(id== todo.id){
          return { ...todo, isDone: true };
        }
        return todo;
      });
      setTodos(updatedTodo);
    }

  return (
    <>
      <div>
        <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodo}/>
        <button onClick={addNewTask}>Add Task</button>
        <br/><br/>

        <hr />
        <h4></h4>
        <h4>Tasks Todo</h4> 
        <ul>
            {
              todos.map((todo)=>(
                  <li key={todo.id} style={my}>
                    <span style={todo.isDone ? {textDecorationLine: 'line-through'} : {}}>{todo.task}</span>
                    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>TaskDeleted(todo.id)}>Delete</button>
                    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button>
                    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>MarkAsDone(todo.id)}>MarkAs Done</button>
                  </li>
              ))
            }
        </ul>
      </div>
      <br /><br /><br />
      <button onClick={upperCaseAll}>UpperCase All</button>
    </>
  )
}

export default TodoList;
