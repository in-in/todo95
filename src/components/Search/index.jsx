import React, { Component } from 'react';
import { TextField, Fieldset } from 'react95';
import PropTypes from 'prop-types';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			'term': '',
		};
	}

	onTermChange = (e) => {
		const { onTermChange } = this.props;
		const term = e.target.value;
		this.setState({ term });
		onTermChange(term);
	}

	render() {
		const { term } = this.state;

		return (
			<Fieldset label={<span className="visually-hidden">Search</span>}>
				<TextField
					aria-label="Search"
					onChange={this.onTermChange}
					placeholder="Search"
					required
					type="search"
					value={term}
				/>
			</Fieldset>
		);
	}
}

Search.propTypes = {
	'onTermChange': PropTypes.func.isRequired,
};

export default Search;
