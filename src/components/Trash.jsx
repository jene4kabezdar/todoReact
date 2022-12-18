import React from 'react';

const Trash = ({deleteTask, id}) => {
	return (
		<button data-id={id} className="w-4 h-4 text-gray-700 flex justify-center items-center hover:text-red-400" onClick={deleteTask}>
			X
		</button>
	);
};

export default Trash;