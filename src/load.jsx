import React from 'react';
import ReactLoading from 'react-loading';

const Load = ({ type, color }) => (
	<ReactLoading type="spin" color="white" height={333} width={138} />
);

export default Load;
