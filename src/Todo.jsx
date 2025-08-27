import { use, useState } from "react";
function Todo() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");
    let addTask = () => {
        setTodos([...todos,newTodo]);
        setNewTodo("");
    }
    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }
    return (
        <>
            <h2>Your Todo App</h2>
            <br />
            <h4>Add Your Task</h4>
            <input value={newTodo} onChange={updateTodo} type="text" placeholder="add a task" />
            <button onClick={addTask}>Add</button>
            <hr />
            <h4>Your All Task</h4>
            <ul>{todos.map((el)=>{
                return <li>{el}</li>
                })}</ul>
        </>
    )
}
export default Todo;