import React from 'react';

class Registration extends React.Component {
	render() {
		return (
			<div className="form-add">
				<form action="">
					<div className="form-header">
						<img src={require( '../images/user.png' )} alt="joão da silva"/>
					</div>

					<div className="form-group">
						<input type="email" required="required"/>
						<label className="control-label">Email</label>
						<i className="bar"></i>
					</div>
					<div className="form-group">
						<input type="password" required="required"/>
						<label className="control-label">Senha</label>
						<i className="bar"></i>
					</div>
					<div className="form-group">
						<input type="password" required="required"/>
						<label className="control-label">Nova senha</label>
						<i className="bar"></i>
					</div>
					<div className="form-group">
						<input type="password" required="required"/>
						<label className="control-label">Confirmar a nova senha</label>
						<i className="bar"></i>
					</div>
					<div className="form-actions">
						<button type="submit" className="btn-primary">salvar</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Registration;
