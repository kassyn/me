import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../stylesheets/components/calendar.scss';

class Calendar extends React.Component {
	render() {
		return (
			<div>
				<DatePicker
					inline
					selected={moment('2016-09-30')}
					locale='pt-br'
				/>
			</div>
		);
	}
}

export default Calendar;
