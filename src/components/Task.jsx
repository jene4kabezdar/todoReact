import React from 'react';
import Trash from "./Trash";

const Task = ({taskText, id, deleteTask}) => {
	return (
		<div className="items-center border rounded-2xl py-2 px-3 leading-tight my-5">
			{taskText}
			<Trash id={ id } deleteTask={deleteTask}/>
		</div>
	);
};

export default Task;