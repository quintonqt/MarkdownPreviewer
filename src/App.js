import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Editor />
				<Previewer />
			</div>
		);
	}
}

const Editor = () => {
	return <textarea id="editor"></textarea>;
};

const Previewer = () => {
	return <div id="preview"></div>;
};

export default App;
