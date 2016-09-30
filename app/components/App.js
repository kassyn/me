import React from 'react';
import Header from './Header';
import Menu from './Menu';

class App extends React.Component {
	getClassPage() {
		var routes  = this.props.routes
		  , current = routes[routes.length - 1]
		;

		return ( current || {} ).guid || '';
	}

	render() {
		return (
			<div className={this.getClassPage()}>
				<Header />

				<div className="main">
					<Menu />

					<div className="content">
						<div className="side-content">
							<div className="wrap">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
