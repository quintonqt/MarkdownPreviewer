import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: 'Bob',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	render() {
		return (
			<div>
				<Editor onChange={this.handleChange} />
				<Previewer text={this.state.input} />
			</div>
		);
	}
}

const Editor = (props) => {
	return <textarea id="editor" onChange={props.onChange} />;
};

const Previewer = (props) => {
	return <div id="preview">{props.text}</div>;
};

export default App;
