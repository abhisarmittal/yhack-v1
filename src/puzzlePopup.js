import React from 'react';
import image from "./puzzle_image.jpg";

export default class PuzzlePopup extends React.Component {
	constructor(props) {
		super(props);

		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside (event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			new Promise(resolve => setTimeout(resolve, 20));
			this.props.toggle();
		}
	}

	handleClick = () => {
		this.props.toggle();
	};

	render() {
			return (
			<div id="puzzle-div" ref={this.setWrapperRef}>
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
