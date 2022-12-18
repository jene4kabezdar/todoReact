import React from 'react';

const Done = ({makeLineTrough}) => {
	return (
		<input id="default-checkbox" type="checkbox" value=""
			   className="w-4 h-4 border-2 text-blue-600 bg-gray-100 rounded-md border-gray-300" onClick={makeLineTrough} />
	);
};

export default Done;