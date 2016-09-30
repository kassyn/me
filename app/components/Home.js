import React from 'react';
import Featured from './Featured';
import Calendar from './Calendar';
import List from './List';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="nine-column">
						<Featured />
					</div>

					<div className="three-column">
						<Calendar />
					</div>
				</div>

				<List />
			</div>
		);
	}
}

export default Home;
