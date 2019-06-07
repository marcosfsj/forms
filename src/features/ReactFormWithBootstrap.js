import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class ReactFormWithBootstrap extends React.Component {
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
				<Container>
					<Row>
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
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default ReactFormWithBootstrap;