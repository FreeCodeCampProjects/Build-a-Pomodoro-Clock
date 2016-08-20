/* Format seconds into hh:mm:ss:
**********************************/

formatTime = function formatTime(o) {
  date = new Date(null);
  date.setSeconds(o.timeValue);
  date.toISOString().substr(11, 8);
  $(o.outputElement).html(date.toISOString().substr(11, 8));
};