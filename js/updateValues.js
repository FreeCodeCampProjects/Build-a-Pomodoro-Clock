/* 
 **********************************/

setStyleTimeout = function (o) {
  setTimeout(function() {
    setCSS([
      [child, ['background-color', o.styles.backgroundColor]],
      [outerCircle, ['border', o.styles.border]]
    ]);
    }, config.TIME_INTERVAL.UPDATE_FORMAT);
};



/* Update time values
 **********************************/
 
updateTimeValues = function (o) {
  start = convertMinutesToSeconds(o.lengthVal);
  current = o.timeValue;
  end = 0;
  completed = parseInt(((current - start) / (end - start)) * 100);
}


/* Update values and format colours
 **********************************/
 
updateValues = function updateValues(o) {
  updateTimeValues(o);
  formatTime({ outputElement: countdown, timeValue: o.timeValue });
  o.session ? timeSessionSecs-- : timeBreakSecs--;
  $(countdown).html($(countdown).html() + config.TEXT.DIVIDER + completed + config.TEXT.PERCENT);
  document.title = $(mode).html() + config.TEXT.DIVIDER + $(countdown).html();
  setStyleTimeout(o);
};