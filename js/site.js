//google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-99715207-1', 'auto');
ga('send', 'pageview');


//mixpanel
(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("1144f6bc59a6333df7f0dcfbc9b084de");


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