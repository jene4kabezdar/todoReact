import React from 'react';

const Input = ({addTask, count}) => {
	return (
		<input className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyDown={e => addTask(e, count, e.target.value)} />
	)
};

export default Input;