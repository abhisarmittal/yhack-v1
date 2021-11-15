import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import PuzzlePopup from './puzzlePopup.js'
import ApplyPopup from './applyPopup.js'

class PopupButtons extends React.Component {
	state = {
		puzzleSeen: false,
		applySeen: false
	};

	toggleApplyPop = () => {
		this.setState({
			applySeen: !this.state.applySeen
		});
	};

	togglePuzzlePop = () => {
		this.setState({
			puzzleSeen: !this.state.puzzleSeen
		});
	};

	render() {
		return (
			<div id="buttons-div">
				<div className="btn" onClick={this.toggleApplyPop}>
					<button>Apply</button>
				</div>
				<div className="btn" onClick={this.togglePuzzlePop}>
					<button>Puzzle</button>
				</div>
			{this.state.applySeen ? <ApplyPopup toggle={this.toggleApplyPop} /> : null}
			{this.state.puzzleSeen ? <PuzzlePopup toggle={this.togglePuzzlePop} /> : null}
			</div>
		);
	}
T}

ReactDOM.render(
	<PopupButtons />,
	document.getElementById('root')
);
