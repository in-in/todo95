import React from 'react';
import PropTypes from 'prop-types';
import {
	Table, TableHead, TableRow, TableHeadCell, TableBody, TableDataCell,
} from 'react95';

const Stats = ({ todo, done }) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableHeadCell>Type</TableHeadCell>
				<TableHeadCell>State</TableHeadCell>
				<TableHeadCell>Count</TableHeadCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow>
				<TableDataCell><span role="img" aria-label="Inbox">📥</span></TableDataCell>
				<TableDataCell>Todo</TableDataCell>
				<TableDataCell>{todo}</TableDataCell>
			</TableRow>
			<TableRow>
				<TableDataCell><span role="img" aria-label="celebration">🎉</span></TableDataCell>
				<TableDataCell>Done</TableDataCell>
				<TableDataCell>{done}</TableDataCell>
			</TableRow>
		</TableBody>
	</Table>
);

Stats.propTypes = {
	'done': PropTypes.number.isRequired,
	'todo': PropTypes.number.isRequired,
};

export default Stats;
