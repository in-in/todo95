/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react95';
import styled from 'styled-components';

const StyledListItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Text = styled.span`
	max-width: calc(100% - 80px);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
	font-weight: ${(props) => (props.important ? '700' : '400')};
`;

class ListItem extends Component {
	constructor() {
		super();
		this.state = {
			'done': false,
			'important': false,
		};
	}

	onLabelClick = () => {
		this.setState(({ done }) => ({ 'done': !done }));
	};

	onMarkImportant = () => {
		this.setState(({ important }) => ({ 'important': !important }));
	};

	render() {
		const { label, onDeleted } = this.props;
		const { done, important } = this.state;

		return (
			<StyledListItem>
				<Text
					done={done}
					important={important}
					onClick={this.onLabelClick}
				>{label}
				</Text>
				<div>
					<Button square onClick={onDeleted}>
						<span role="img" aria-label="Trash Can">🗑️</span>
					</Button>
					<Button square onClick={this.onMarkImportant}>
						<span role="img" aria-label="Exclamation Mark">❗</span>
					</Button>
				</div>
			</StyledListItem>
		);
	}
}

ListItem.propTypes = {
	'label': PropTypes.string.isRequired,
	'onDeleted': PropTypes.func.isRequired,
};

export default ListItem;
