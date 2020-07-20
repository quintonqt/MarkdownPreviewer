import React from 'react';
import './App.css';
let marked = require('marked');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: defaultText,
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
				<Editor value={this.state.input} onChange={this.handleChange} />
				<Previewer text={marked(this.state.input)} />
			</div>
		);
	}
}

const Editor = (props) => {
	return (
		<textarea id="editor" onChange={props.onChange}>
			{props.value}
		</textarea>
	);
};

const Previewer = (props) => {
	return (
		<div id="preview" dangerouslySetInnerHTML={{ __html: props.text }}></div>
	);
};

export default App;

const defaultText = `# This Markdown Previewer was made with React

## This is a sub-header

Check out my website [here](https://quintonqt.github.io)

\`Here is some pseudocode inline\`

Here is a block of code:
\`\`\`
	<div>
		<Editor value={this.state.input} onChange={this.handleChange} />
		<Previewer text={marked(this.state.input)} />
	</div>
\`\`\`

* Nani?

> This is a block quote. Just add the greater than symbol in front 
of whatever you want to write!

![React Logo](./logo192.png)

**BE BOLD**
`;
