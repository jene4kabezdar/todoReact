import React, {useState} from 'react';
import Trash from "./Trash";
import Done from "./Done";


const Task = ({taskText, id, deleteTask}) => {
	const defaultTaskStyle = 'items-center border rounded-2xl py-2 px-3 leading-tight my-5'
	const [done, setDone] = useState(defaultTaskStyle);

	function makeLineTrough(event) {
		console.log(event.target.checked);
		event.target.checked ? setDone(defaultTaskStyle + ' line-through text-gray-500') : setDone(defaultTaskStyle);
	}

	return (
		<div className={done}>
			{taskText}
			<div className="float-right inline-flex justify-around">
				<Done makeLineTrough={event => makeLineTrough(event)}/>
				<Trash id={ id } deleteTask={deleteTask}/>
			</div>
		</div>
	);
};

export default Task;