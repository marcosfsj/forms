import React from 'react'

class Spinner extends React.Component {
	render() {
		return (
			<div>
				{props.message}
			</div>
		);
	}
}

Spinner.defaultProps = {
	message = "Loading..."
};

export default Spinner;
