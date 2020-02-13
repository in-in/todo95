import React from 'react';
import PropTypes from 'prop-types';
import {
	Table, TableHead, TableRow, TableHeadCell, TableBody, TableDataCell,
} from 'react95';
import styled from 'styled-components';

const StyledTableDataCell = styled(TableDataCell)`
	text-align: center
`;

const Stats = ({ todo, done }) => (
	<Table>
		<TableHead>
			<TableRow>
				<TableHeadCell>Type</TableHeadCell>
				<TableHeadCell>Amount</TableHeadCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow>
				<StyledTableDataCell>
					<span role="img" aria-label="Inbox">📥</span> Active
				</StyledTableDataCell>
				<StyledTableDataCell>{todo}</StyledTableDataCell>
			</TableRow>
			<TableRow>
				<StyledTableDataCell><span role="img" aria-label="celebration">🎉</span> Done</StyledTableDataCell>
				<StyledTableDataCell>{done}</StyledTableDataCell>
			</TableRow>
		</TableBody>
	</Table>
);

Stats.propTypes = {
	'done': PropTypes.number.isRequired,
	'todo': PropTypes.number.isRequired,
};

export default Stats;
