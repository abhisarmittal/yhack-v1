import React from 'react';
import ReactDOM from 'react-dom';
import image from './puzzle_image.jpg';
import './index.css'

class Popup extends React.Component {
	handleClick = () => {
		this.props.toggle();
	};

	render() {
			return (
			<div id="puzzle-div">
				<span className="close" onClick={this.handleClick}>&times;</span>
				<h1>Puzzle Title</h1>
				<img src={image} width="500px" alt="puzzle_image"/>
				<form>
					<label>Puzzle Answer: </label>
					<input type="text"/>
					<button type="button">Submit</button>
				</form>
			</div>
		);
	}
}

class PopupButtons extends React.Component {
	state = {
		seen: false
	};

	togglePop = () => {
		this.setState({
			seen: !this.state.seen
		});
	};

	render() {
		return (
			<div id="buttons-div">
				<div className="btn" onClick={this.togglePop}>
					<button>Apply</button>
				</div>
				<div className="btn" onClick={this.togglePop}>
					<button>Puzzle</button>
				</div>
			{this.state.seen ? <Popup toggle={this.togglePop} /> : null}
			</div>
		);
	}
T}

ReactDOM.render(
	<PopupButtons />,
	document.getElementById('root')
);
