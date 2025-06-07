//   https://react.dev/learn/updating-arrays-in-state
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function TodoList() {
    let [todos, setTodos] = useState([{task:"SAMPLE", id:uuidv4()}]);
    let [newTodo, setNewTodos] = useState("");

    let addNewTask = () =>{
      // setNewTodos(newTodo);
      console.log(newTodo);
      setTodos( (prevTodos) =>{
        return [...prevTodos, { task: newTodo, id: uuidv4() }];
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
                  <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>TaskDeleted(todo.id)}>Delete</button>
                  </li>
              ))
            }
        </ul>
      </div>
    </>
  )
}

export default TodoList;
