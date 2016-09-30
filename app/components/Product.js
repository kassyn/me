import React from 'react';
import styles from '../stylesheets/components/product.scss';

class Product extends React.Component {
	render() {
		return (
			<div className={styles.wrap}>
				<span className={styles.code}>#COD03021</span>

				<figure className={styles.figure}>
					<img src={require( '../images/product.png' )} />
				</figure>

				<h3>
					Papel Sulfite 75g Alcalino 210x297 A4 Chamex Office Ipaper
				</h3>

				<div className={styles.price}>R$ 15,90</div>

				<button type="button" className={styles.call}>
					<i className="fa fa-cart-plus"></i> Carrinho
				</button>
			</div>
		);
	}
};

export default Product;
