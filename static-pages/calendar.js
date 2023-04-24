document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
	  initialView: 'dayGridMonth',
	  events: [
		{
		  title: 'Event 1',
		  start: '2023-04-22',
		  end: '2023-04-23'
		},
		{
		  title: 'Event 2',
		  start: '2023-04-26',
		  end: '2023-04-27'
		}
	  ]
	});
	calendar.render();
  });
  