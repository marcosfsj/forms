import React from 'react';

class PureReactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		// Validate inputs
		// Save the data (probably calling an action against redux)
		alert(JSON.stringify(this.state));
	}

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<label>
						Is going:
						<input
							name="isGoing"
							type="checkbox"
							checked={this.state.isGoing}
							onChange={this.handleInputChange} />
					</label>
					<br />
					<label>
						Number of guests:
						<input
							name="numberOfGuests"
							type="number"
							value={this.state.numberOfGuests}
							onChange={this.handleInputChange} />
					</label>
					<br />
					<button type="submit">Submit</button>
				</form>
			</React.Fragment>
		);
	}
}

export default PureReactForm;