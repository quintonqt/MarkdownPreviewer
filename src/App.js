import React from 'react';
import './App.css';
let marked = require('marked');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
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
				<Previewer text={marked(this.state.input)} />
			</div>
		);
	}
}

const Editor = (props) => {
	return <textarea id="editor" onChange={props.onChange} />;
};

const Previewer = (props) => {
	return (
		<div id="preview" dangerouslySetInnerHTML={{ __html: props.text }}></div>
	);
};

export default App;
