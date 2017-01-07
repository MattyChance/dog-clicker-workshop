import React, { Component } from 'react';

class Dog extends Component {
	constructor(props) {
		super(props);
		this.state = {voteCount: props.initialVote};
	}

	_handleVote(e) {
		this.setState({voteCount: this.state.voteCount + 1})
	}

	render() {
		return (
			<li>
				<h2>{this.props.name}</h2>
				<img role="presentation" src={this.props.source} />
				<br/>
				<button onClick={ e => this._handleVote()}>vote me: {this.state.voteCount}</button>
			</li>
		);
	}
}

Dog.propTypes = { initialVote: React.PropTypes.number };
Dog.defaultProps = { initialVote: 0 };

export default Dog;