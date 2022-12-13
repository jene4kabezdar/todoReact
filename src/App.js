import "./index.css"
import { root } from "./index"
import Input from "./components/Input"
import Task from "./components/Task"


let taskKeeper = []
let count = 0;

function addTask(event, id, taskText) {
    if (event.key === "Enter") {
        event.target.value = ""
        taskKeeper.push({id: id, taskText: taskText})
        count++
        root.render(
            <App />
        )
    }
}

function deleteTask(event) {
    const { id } = event.target.dataset
    console.log(event.target)
    console.log(id)
    const idToInt = parseInt(id, 10)
    taskKeeper = taskKeeper.filter(task => task.id !== idToInt)
    root.render(
        <App />
    )
}

export default function App() {
    const taskBar = taskKeeper.map(
        task =>
            <Task key={task.id} taskText={task.taskText} id={task.id} deleteTask={deleteTask}/>
    )
    return (
        <div className="flex justify-center relative">
            <div className="w-1/4 items-center mt-4">
                <Input addTask={addTask} count={count}/>
                {taskBar}
            </div>
        </div>
    );
}
