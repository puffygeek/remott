//google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-99715207-1', 'auto');
ga('send', 'pageview');


$(function() {
  //hover
  $('.hover-black').prev().hover(function(){
    $(this).next().show();
  });
  //date picker
  $('#from').on('changeDate', function(){
    $('#to').datepicker('setStartDate', $(this).datepicker('getDate'));
  });

  //calendar

  const defaultActivity = { color: 'gray' };

  const baseEvents = [
    {title: 'Breakfast', dow: [1, 2, 3, 4, 5], start: '08:00', end: '08:30'},
    {title: 'Lunch', dow: [1, 2, 3, 4, 5], start: '12:00', end: '12:30'},
    {title: 'Dinner', dow: [1, 2, 3, 4, 5], start: '18:00', end: '18:30'},
  ].map(a => Object.assign({}, defaultActivity, a));

  const productivityEvents = baseEvents.concat([
    {title: 'Sprint Goals', dow: [1], start: '13:30', end: '14:00', color: 'red'},
    {title: 'Sprint Summery', dow: [5], start: '15:00', end: '15:30', color: 'red'},
    {title: 'Yoga', dow: [2,5], start: '07:00', end: '08:00', color: 'pink'},
    {title: 'Group Building', dow: [1, 2, 3, 5], start: '14:00', end: '15:00', color: 'red'},
    {title: 'Inside Lecture', dow: [4], start: '16:00', end: '16:30', color: 'red'},
    {title: 'Inside Lecture', dow: [2], start: '11:30', end: '12:00', color: 'red'},
  ].map(a => Object.assign({}, defaultActivity, a)));

  const funEvents = [
    {title: 'Yoga', dow: [2, 3, 5], srat: '07:00', end: '08:00'},
    {title: 'Night out', dow: [4], start: '19:00', end: '21:00', color: 'blue'},
  ].map(a => Object.assign({}, defaultActivity, a));

  const customEvents = [
    {title: 'Yoga', dow: [2, 3, 5], srat: '07:00', end: '08:00'},
    {title: 'Lunch', dow: [1, 2, 3, 4, 5], start: '12:00', end: '13:00'},
    {title: 'Night out', dow: [4], start: '18:00', end: '20:00'},
  ].map(a => Object.assign({}, defaultActivity, a));

  $('.draggable').each(function() {
    $(this)
    .data('event', {
      title: $(this).text().trim(),
      stick: true,
      color: $(this).parent().attr('data-color'),
      textColor: $(this).parent().attr('data-textColor'),
    }).draggable({
      zIndex: 999,
      opacity: 0.1,
      revert: true,
      revertDuration: 0,
      start: function( event, ui ) {
        // $(this).css({ height: '100px' });
      },
      stop: function( event, ui ) {
        // $(this).css({ height: '200px' });
      },
    })
    .find("img").addClass("rounded");

  });

  function getEvents() {
    console.log($('#calendar-custom').fullCalendar('clientEvents'));
  }

  function removeEvent(eventId) {
    $('#calendar-custom').fullCalendar('removeEvents', eventId);
  }

  $('#calendar-productivity').fullCalendar({
    events: productivityEvents,
    header: {
      right: 'today, prev,next',
      center: 'your calendar',
      left: 'agendaWeek, listWeek'
    },
    eventDragStart: function( event, jsEvent, ui, view ) {
    },
    dragOpacity: 0.3,
    firstDay: 1,
    defaultView: 'agendaWeek',
    slotDuration: '1:00:00',
    droppable: true,
    allDaySlot: false,
    slotEventOverlap: false,
    eventStartEditable: false,
    eventDurationEditable: false,
    selectable: false,
    overlap: false,
    eventOverlap: false,
    editable: true, //can move event
    eventClick: function(calEvent, jsEvent, view) {
      removeEvent(calEvent._id);
    },

    minTime: '07:00',
    maxTime: '21:00',
    height: 420,
    drop: function() {
    },
  });

})