import React, { Component } from 'react';
import './index.css'

export default class applyPopup extends React.Component {
	handleClick = () => {
		this.props.toggle();
	};

	render() {
		return (
			<div id="puzzle-div">
				<span className="close" onClick={this.handleClick}>&times;</span>
				<h1>Application</h1>
				<form>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"/>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"/>
                </form>
			</div>
		);
	}
}