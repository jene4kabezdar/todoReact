import React from 'react';

const Trash = ({deleteTask, id}) => {
	return (
		<button data-id={id} className="text-gray-700 float-right flex justify-center items-center hover:text-red-400" onClick={e => deleteTask(e)}>
			X
		</button>
	);
};

export default Trash;