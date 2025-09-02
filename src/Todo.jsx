import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    let [todos, setTodos] = useState([{ task: "food", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");
    let addTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    }
    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }
    let DeleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }
    let upperCase = () => {
        setTodos((prevTodos) => (
            prevTodos.map((ele) => {
                return {
                    ...ele,
                    task: ele.task.toUpperCase(),
                };
            })
        ))
    };
    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((ele) => {
                if (ele.id === id) {
                    return {
                        ...ele,
                        task: ele.task.toUpperCase(),
                    };
                } else {
                    return ele;
                }

            })
        )
    };
    return (
        <>
            <h2>Your Todo App</h2>
            <br />
            <h4>Add Your Task</h4>
            <input value={newTodo} onChange={updateTodo} type="text" placeholder="add a task" />
            <button onClick={addTask}>Add</button>
            <hr />
            <h4>Your All Task</h4>
            <ul>{todos.map((el) => {
                return <li key={el.id} ><span>{el.task}</span>
                    &nbsp; &nbsp; &nbsp;

                    if (task === done) {
                        <i class="fa-solid fa-circle-check"></i>
                    }else{
                        <i class="fa-regular fa-circle-check"></i>
                    }
                    <button onClick={() => DeleteTodo(el.id)} >Delete</button>
                    &nbsp; &nbsp;
                    <button onClick={() => upperCaseOne(el.id)} >Update</button>

                </li>
            })}
            </ul>
            <button onClick={upperCase}>Update</button>
        </>
    )
}
export default Todo;