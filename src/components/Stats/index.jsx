import React from 'react';
import {
	Table, TableHead, TableRow, TableHeadCell, TableBody, TableDataCell,
} from 'react95';

const Stats = () => (
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
				<TableDataCell>1</TableDataCell>
			</TableRow>
			<TableRow>
				<TableDataCell><span role="img" aria-label="celebration">🎉</span></TableDataCell>
				<TableDataCell>Done</TableDataCell>
				<TableDataCell>209</TableDataCell>
			</TableRow>
		</TableBody>
	</Table>
);

export default Stats;
