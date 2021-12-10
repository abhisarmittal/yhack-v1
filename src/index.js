import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import PuzzlePopup from './puzzlePopup.js'
import ApplyPopup from './applyPopup.js'

class PopupButtons extends React.Component {
	state = {
		puzzleSeen: false,
		applySeen: false,
	};

	toggleApplyPop = () => {
		if (this.state.puzzleSeen) {
			this.setState({
				puzzleSeen: !this.state.puzzleSeen
			});
		} else {
			this.setState({
				applySeen: !this.state.applySeen
			});
		}
	};

	togglePuzzlePop = () => {
		if (this.state.applySeen) {
			this.setState({
				applySeen: !this.state.applySeen
			});
		} else {
			this.setState({
				puzzleSeen: !this.state.puzzleSeen
			});
		}
	};

	render() {
		return (
			<div id="buttons-div">
				<div className="btn">
					<button onClick={this.toggleApplyPop}>Apply</button>
				</div>
				<div className="btn">
					<button onClick={this.togglePuzzlePop}>Puzzle</button>
				</div>
			{this.state.applySeen ? <ApplyPopup toggle={this.toggleApplyPop} /> : null}
			{this.state.puzzleSeen ? <PuzzlePopup toggle={this.togglePuzzlePop} /> : null}
			</div>
		);
	}
}

ReactDOM.render(
	<PopupButtons />,
	document.getElementById('root')
);
