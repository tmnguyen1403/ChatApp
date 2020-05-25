import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatWindow from './ChatWindow';

class MessageManager extends Component {

	static propTypes = {
		users: PropTypes.array.isRequired
	}

	state = {
		messages: []
	}

	sendMessage = (message) => {
		console.log("Receive: ", message);
		this.setState({
			messages: [
				...this.state.messages,
				message
			]
		})
	}

	render() {
		const {users} = this.props;
		return (
			<React.Fragment>
				{users.map(user => (
						<ChatWindow
							key={user.username}
							username={user.username}
							messages={this.state.messages}
							handleMessage={this.sendMessage}
						/>
				))}
			</React.Fragment>
		);
	}
}

export default MessageManager;
