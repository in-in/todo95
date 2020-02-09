import React from 'react';
import Header from '../Header';
import List from '../List';

const App = () => {
	const data = [
		{
			'id': '1',
			'label': 'item1',
			'important': false,
		},
		{
			'id': '2',
			'label': 'item2',
			'important': true,
		},
		{
			'id': '3',
			'label': 'item3',
			'important': false,
		},
	];

	return (
		<>
			<Header />
			<List todos={data} />
		</>
	);
};

export default App;
