import React from 'react';
import PropTypes from 'prop-types';

import SendMessage from './SendMessage';

//receive and render message for each user
const ChatWindow = (props) => {

	const {username, messages} = props;
	const handleMessage = (message) => {
		props.handleMessage({username: username, text: message});
	}

	return (
		<div className="chat-window">
			<h2>Super Awesome Chat</h2>
			<div className="name sender">{username}</div>

			<ul className="message-list">
				{messages.map((message, index) => (
					<li
						key={index}
						className={
							message.username === username ? 'message sender' : 'message recipient'
						}
					>
						<p>{`${message.username}: ${message.text}`}</p>
					</li>
				))}
			</ul>
			<SendMessage handleMessage={handleMessage}/>

		</div>
	);
};

ChatWindow.propTypes = {
	username: PropTypes.string.isRequired,
	messages: PropTypes.array.isRequired,
	handleMessage: PropTypes.func.isRequired
};
export default ChatWindow;
