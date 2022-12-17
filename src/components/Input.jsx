import React from 'react';

const Input = ({setTask}) => {
	return (
		<input className="shadow w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyDown={setTask}/>
	)
};

export default Input;