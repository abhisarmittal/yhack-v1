import React from 'react';
import './index.css'

export default class applyPopup extends React.Component {
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
					<button type="button">Submit</button>
                    </form>
                </div>
			</div>
		);
	}
}
