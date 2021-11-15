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
				<div class="container">
                    <form>
                    <p>
                        <label for="fname">First name: </label>
                        <input type="text" id="fname" name="fname"/>
                    </p>
                    <p>
                        <label for="lname">Last name: </label>
                        <input type="text" id="lname" name="lname"/>
                    </p>
                    <p>
                        <label for="college">College: </label>
                        <input type="text" id="college" name="college"/>
                    </p>
                    <p>
                        <label for="cyear">Class year: </label>
                        <select name="cyear" id="cyear">
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="other">Other</option>
                        </select>
                    </p>
                    </form>
                </div>
			</div>
		);
	}
}