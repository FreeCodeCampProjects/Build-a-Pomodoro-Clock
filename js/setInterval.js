/* Set interval to iterate over time values:
********************************************/

si = setInterval(function() {
  checkAppModeFunc();
}, config.TIME_INTERVAL.UPDATE_FORMAT);