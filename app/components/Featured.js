import React from 'react';
import Swiper from '../vendor/swiper';
import styles from '../stylesheets/components/featured.scss';

class Featured extends React.Component {
	componentDidMount() {
		this.refs.slider = new Swiper( this.refs.slider, {
			loop : true
		});
	}

	handlePrev() {
		this.refs.slider.swipePrev();
	}

	handleNext() {
		this.refs.slider.swipeNext();
	}

	getItems() {
		var images = [
			require( '../images/slide-1.jpg' ),
			require( '../images/slide-2.jpg' ),
			require( '../images/slide-3.jpg' ),
			require( '../images/slide-4.jpg' )
		];

		return images.map(function(image, index) {
			return (
				<div key={index} className="swiper-slide">
					<figure
						className={styles.figure}
						style={{backgroundImage: 'url(' + image + ')'}}
					/>

					<div className={styles.caption}>
						Campanha Copa 2014
						<span>Status</span>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<div ref="slider" className={styles.wrap}>
					<div className="swiper-wrapper">
						{this.getItems()}
					</div>

					<div>
						<button className={styles.prev} type="button" onClick={this.handlePrev.bind( this )}>
							<i className="fa fa-chevron-left"></i>
						</button>
						<button className={styles.next} type="button" onClick={this.handleNext.bind( this )}>
							<i className="fa fa-chevron-right"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Featured;
