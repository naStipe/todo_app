import React from "react";
import { useState } from "react";
import './TodoUICard.css';
import './colors.css';

function TodoUICard () {
    const [tasks, setTasks] = useState<String[]>([]);
    const [task, setTask] = useState("")

    const addTasks = () => {
        if(task !== ""){
            setTasks([...tasks, task])
            setTask("");
            console.log(tasks)
        }
    }

    return (
        <>
            <div className="UICard m-20 max-w-md p-10 rounded-lg max-h-screen">
                <div>
                <h1 className="text-outline text-5xl pb-6 font-extrabold text-green-500">ToDo App</h1>
                <input className="bg-slate-100 rounded-md p-4 m-4"
                       type = "text"
                       value = {task}
                       onChange = {(e : any) => {
                           setTask(e.target.value);
                       }}
                       placeholder="Write a new task"
                />
                <button onClick= {addTasks}
                    className="bg-green-500 text-amber-50 p-3 m-3 rounded-md font-mono font-bold hover:bg-green-600">Add task</button>
                </div>
                <div>
                    {tasks.length > 0 ?
                        <ul>
                            {
                                tasks.map((task,index) => (
                                    <div>
                                        <li>{task}</li>
                                        <button>Delete</button>
                                    </div>
                                ))
                            }
                        </ul>
                        : <div>
                            <p>No tasks found</p>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default TodoUICard