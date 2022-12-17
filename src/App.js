import "./index.css"
import Input from "./components/Input"
import Task from "./components/Task"
import {useState} from "react";


let count = 0;

export default function App() {
    const [tasks, setTasks] = useState([]);

    function addTask(event) {
        if (event.key === 'Enter') {
            setTasks([
                ...tasks,
                {id: count, text: event.target.value},
            ]);
            event.target.value = '';
            count++;
        }
    }

    function deleteTask(event) {
        const { id } = event.target.dataset;
        setTasks(
            tasks.filter(
                task => task.id !== parseInt(id, 10)
            )
        );
    }

    const taskBar = tasks.map(
        task => <Task key={task.id} taskText={task.text} id={task.id} deleteTask={event => deleteTask(event)}/>
    );

    return (
        <div className="flex justify-center relative">
            <div className="w-1/4 items-center mt-4">
                <Input setTask={event => addTask(event, count)}/>
                {taskBar}
            </div>
        </div>
    );
}
