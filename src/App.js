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
			<div className="wrapper">
				<div id="left-container">
					<h1 id="title">React Markdown Previewer</h1>
					<h2 className="instructions">Make Your Edits Here...</h2>
					<Editor value={this.state.input} onChange={this.handleChange} />
					<h2 className="instructions">See your changes there --{'>'}</h2>
				</div>
				<div id="right-container">
					<Previewer text={marked(this.state.input)} />
				</div>
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

const defaultText = `# Main Header

## This is a sub-header

Check out my website [here](https://quintonqt.github.io)

\`Here is some pseudocode inline\`

Here is a block of code:
\`\`\`
	<div>
		<Editor value={this.state.input} />
		<Previewer text={marked(this.state.input)} />
	</div>
\`\`\`

* Nani?

> This is a block quote. Just add the greater than symbol in front 
of whatever you want to write!

![React Logo](./logo192.png)

**BE BOLD**
`;
