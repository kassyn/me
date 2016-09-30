import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
	render() {
		return (
			<div className="side-menu">
				<ul className="navigation">
					<li className="menu-item">
						<Link to="/" className="menu-link">
							<div className="menu-icon fa fa-home"></div>
							<div className="menu-name">Home</div>
						</Link>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="#">
							<div className="menu-icon fa fa-tasks"></div>
							<div className="menu-name">Lorem Ipsum</div>
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="#">
							<div className="menu-icon fa fa-usd"></div>
							<div className="menu-name">Lorem Ipsum</div>
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="#">
							<div className="menu-icon fa fa-shopping-cart"></div>
							<div className="menu-name">Lorem Ipsum</div>
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="#">
							<div className="menu-icon fa fa-globe"></div>
							<div className="menu-name">Lorem Ipsum</div>
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="#">
							<div className="menu-icon fa fa-tags"></div>
							<div className="menu-name">Lorem Ipsum</div>
						</a>
					</li>
					<li className="menu-item">
						<a className="menu-link" href="#">
							<div className="menu-icon fa fa-question-circle"></div>
							<div className="menu-name">Lorem Ipsum</div>
						</a>
					</li>
				</ul>

				<div className="overlayer-menu"></div>
			</div>
		);
	}
}

export default Menu;
