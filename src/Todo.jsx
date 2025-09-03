import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    let [todos, setTodos] = useState([{ task: "food", id: uuidv4(), isDone: false, }]);
    let [newTodo, setNewTodo] = useState("");
    let addTask = () => {
        if (newTodo != "") {
            setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        }
        setNewTodo("");
    }
    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }
    let DeleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }
    let markAsDoneAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((ele) => {
                return {
                    ...ele,
                    isDone:true,
                };
            })
        ))
    };
    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((ele) => {
                if (ele.id === id) {
                    return {
                        ...ele,
                        isDone: true,
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
                return <li key={el.id} >
                    <span
                        style={el.isDone ? { textDecorationLine: "line-through" } : {}}>
                        {el.task}</span>
                    &nbsp; &nbsp;
                    <button onClick={() => DeleteTodo(el.id)} >Delete</button>
                    &nbsp; &nbsp;
                    <button onClick={() => markAsDone(el.id)} >Mark As Done</button>
                </li>
            })}
            </ul>
            <button onClick={markAsDoneAll}>mark As Done All</button>
        </>
    )
}
export default Todo;