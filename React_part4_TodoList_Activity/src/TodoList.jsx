import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function TodoList() {
    let [todos, setTodos] = useState([{task:"SAMPLE", id:uuidv4()}]);
    let [newTodo, setNewTodos] = useState("");

    let addNewTask = () =>{
      // setNewTodos(newTodo);
      console.log(newTodo);
      setTodos([...todos, { task: newTodo, id: uuidv4() }]);

      setNewTodos("");
    }

    let updateTodo = (event)=>{
      // console.log(event.target);
      // console.log(event.target.value);
      setNewTodos(event.target.value);
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
                  <li key={todo.id}>{todo.task}</li>
              ))
            }
        </ul>
      </div>
    </>
  )
}

export default TodoList;
