import React, { Component } from 'react';

export default class ChatBar extends Component {
	// This function checks if the Key up is 'Enter'
	// If it's the case it takes the value of the input field
	// and triggers the addMessage function inherited from  App component
	handleInputMessage = (e) => {
		if (e.keyCode == 13) {
			this.props.addMessage(e.target.value);
			e.target.value = '';
		}
	};
	handleInputName = (e) => {
		if (e.keyCode == 13) {
			this.props.updateUsername(e.target.value);
		}
	};

	render() {
		return (
			<footer className="chatbar">
				<input
					onKeyUp={this.handleInputName}
					className="chatbar-username"
					defaultValue={this.props.user ? this.props.user : 'Your name (Optional)'}
				/>
				<input
					onKeyUp={this.handleInputMessage}
					className="chatbar-message"
					placeholder="Type a message and hit ENTER"
				/>
			</footer>
		);
	}
}
