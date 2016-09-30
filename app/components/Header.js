import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
	constructor(props) {
		super( props );

		this.state = {
			active : false
		};
	}

	handleToggle() {
		this.setState({
			active : !this.state.active
		});
	}

	getUserFloat() {
		return (
			<div className="user-popup">
				<figure className="user-avatar">
					<img src={require( '../images/user.png' )} />
				</figure>

				<div className="user-popup-info">
					<div className="user-name">
						<strong>João da Silva</strong>
					</div>

					<div className="user-access">
						Último acesso: 10/10/15 09:39
					</div>

					<ul className="user-popup-actions">
						<li>
							<Link to="/add">Alterar Cadastro</Link>
						</li>
						<li>
							<a href="#">Alterar Senha</a>
						</li>
					</ul>
				</div>

				<div className="user-popup-footer">
					<div className="user-popup-footer-wrap">
						<div className="user-action-first">
							<a href="#">
								<i className="fa fa-comments"></i> Suporte Online
							</a>
						</div>

						<div className="user-action-last">
							<a href="#">
								<i className="fa fa-sign-out"></i> Logout
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderUserPopUp() {
		if ( this.state.active ) {
			return this.getUserFloat();
		}
	}

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

					<div className="user-info" onClick={this.handleToggle.bind( this )}>
						<span>Bem vindo,</span>
						<div className="user-name">
							<strong>João da Silva</strong>
						</div>
						<div className="icon-action">
							<i className="fa fa-caret-down"></i>
						</div>
					</div>

					{this.renderUserPopUp()}
				</div>
			</div>
		);
	}
}

export default Header;
