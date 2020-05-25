import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
		static propTypes = {
			handleMessage: PropTypes.func.isRequired
		}
		
		state = {
			value: ''
		}

		handleChange = event => {
			event.preventDefault();
			this.setState({value: event.target.value});
		}

		handleClick = event => {
			event.preventDefault();
			this.props.handleMessage(this.state.value);
		}

		isEmpty = () => {
			return this.state.value === '';
		}


		render(){
			return (
				<form className="input-group">
					<input type="text"
						className="form-control"
						placeholder="Enter your message..."
						value={this.state.value}
						onChange={this.handleChange}
						/>
					<div className="input-group-append">
						<button className="btn submit-button" disabled={this.isEmpty()} onClick={this.handleClick}>
							SEND
						</button>
					</div>
				</form>
			);
		}
}

export default SendMessage;
