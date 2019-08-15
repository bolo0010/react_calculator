import React from 'react';

const Key = ({ id, key_fun, key_name, click }) => {
	return (
		<div
			className={`${key_name} ${'key'}`}
			id={id}
			value={key_fun}
			onClick={click}
		>
			{key_fun}
		</div>
	);
};

export default Key;
