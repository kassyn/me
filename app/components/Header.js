import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="branding">
					<a href="#" title="Mercado Eletrônico">
						<img src={require( '../images/branding.png' )} />
					</a>
				</div>

				<div className="user-header">
					<figure className="user-avatar">
						<img src={require( '../images/avatar.png' )} />
					</figure>

					<div className="user-info">
						<span>Bem vindo,</span>
						<div className="user-name">
							<strong>João da Silva</strong>
						</div>
						<div className="icon-action">
							<i className="fa fa-caret-down"></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
