import React from 'react';
import DatePicker from 'react-datepicker';
import '../stylesheets/components/calendar.scss';

class Calendar extends React.Component {
	render() {
		return (
			<div>
				<DatePicker inline locale='pt-br' />
			</div>
		);
	}
}

export default Calendar;
