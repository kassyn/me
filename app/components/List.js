import React from 'react';
import Product from './Product';

class List extends React.Component {
	getItems() {
		var count = 6
		  , items = []
		;

		while ( count-- ) {
			items.push(
				<div key={count} className="four-column">
					<Product />
				</div>
			);
		}

		return items;
	}

	render() {
		return (
			<div className="row four-nth">
				{this.getItems()}
			</div>
		);
	}
};

export default List;
