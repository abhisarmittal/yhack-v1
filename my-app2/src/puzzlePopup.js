import React, {Component} from 'react';
import image from "./puzzle_image.jpg";

class PuzzlePopup extends React.Component {
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
