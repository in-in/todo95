import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react95';
import styled from 'styled-components';

const StyledListItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Text = styled.span`
	max-width: calc(100% - 80px);
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
	font-weight: ${(props) => (props.important ? '700' : '400')};
	cursor: pointer;
`;

const StyledButton = styled(Button)`
	margin-left: .5em;
`;

const ButtonGroup = styled.div`
	margin-left: .5em;
`;

const ListItem = (props) => {
	const {
		done,
		important,
		label,
		onDeleted,
		onToggleDone,
		onToggleImportant,
	} = props;

	return (
		<StyledListItem>
			<Text
				done={done}
				important={important}
				onClick={onToggleDone}
			>{label}
			</Text>
			<ButtonGroup>
				<Button square onClick={onDeleted}>
					<span role="img" aria-label="Trash Can">🗑️</span>
				</Button>
				<StyledButton square onClick={onToggleImportant}>
					<span role="img" aria-label="Exclamation Mark">❗</span>
				</StyledButton>
			</ButtonGroup>
		</StyledListItem>
	);
};

ListItem.propTypes = {
	'done': PropTypes.bool.isRequired,
	'important': PropTypes.bool.isRequired,
	'label': PropTypes.string.isRequired,
	'onDeleted': PropTypes.func.isRequired,
	'onToggleDone': PropTypes.func.isRequired,
	'onToggleImportant': PropTypes.func.isRequired,
};

export default ListItem;
