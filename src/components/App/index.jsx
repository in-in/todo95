import React, { Component } from 'react';
import styled, {
	createGlobalStyle,
	ThemeProvider,
	StyleSheetManager,
} from 'styled-components';
import { reset, themes, Window } from 'react95';
import nanoid from 'nanoid';
import Header from '../Header';
import Filter from '../Filter';
import Stats from '../Stats';
import AddForm from '../AddForm';
import List from '../List';
import Search from '../Search';

const ResetStyles = createGlobalStyle`
	${reset}
	body {
		background-color: teal
	}
`;

const StyledWindow = styled(Window)`
	display: block;
	width: 100%;
	max-width: 425px;
	margin-left: auto;
	margin-right: auto;
`;

class App extends Component {
	static createItem(text) {
		return {
			'done': false,
			'id': nanoid(),
			'important': false,
			'label': text,
		};
	}

	static toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1),
		];
	}

	static search(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((i) => i.label
			.toLowerCase().indexOf(term.toLowerCase()) > -1);
	}

	static filter(items, status) {
		switch (status) {
			case 'active':
				return items.filter((i) => !i.done);
			case 'done':
				return items.filter((i) => i.done);
			case 'all':
			default:
				return items;
		}
	}

	constructor() {
		super();
		this.state = {
			'data': [
				App.createItem('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime necessitatibus corporis labore dolorem consequatur eum libero tempora est? Amet odit officiis minus, provident ad aliquam minima eveniet tenetur aut a.'),
				App.createItem('item2'),
				App.createItem('item3'),
				App.createItem('item4'),
				App.createItem('Moo'),
			],
			'term': '',
			'filter': 'all',
		};
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			const idx = data.findIndex((el) => el.id === id);
			const result = data.filter((el, i) => i !== idx);

			return {
				'data': result,
			};
		});
	}

	addItem = (text) => {
		this.setState(({ data }) => ({
			'data': [...data, App.createItem(text)],
		}));
	}

	onToggleImportant = (id) => {
		this.setState(({ data }) => ({
			'data': App.toggleProperty(data, id, 'important'),
		}));
	}

	onToggleDone = (id) => {
		this.setState(({ data }) => ({
			'data': App.toggleProperty(data, id, 'done'),
		}));
	}

	onTermChange = (term) => {
		this.setState({ term });
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	}

	render() {
		const { data, term, filter } = this.state;
		const doneCount = data.filter((el) => el.done).length;
		const todoCount = data.length - doneCount;
		const visibleItems = App.filter(App.search(data, term), filter);

		return (
			<StyleSheetManager disableVendorPrefixes>
				<>
					<ResetStyles />
					<ThemeProvider theme={themes.default}>
						<StyledWindow>
							<Header />
							<Search onTermChange={this.onTermChange} />
							<Filter onFilterChange={this.onFilterChange} filter={filter} />
							<Stats todo={todoCount} done={doneCount} />
							<List
								todos={visibleItems}
								onDeleted={this.deleteItem}
								onToggleImportant={this.onToggleImportant}
								onToggleDone={this.onToggleDone}
							/>
							<AddForm onAdded={this.addItem} />
						</StyledWindow>
					</ThemeProvider>
				</>
			</StyleSheetManager>
		);
	}
}

export default App;
