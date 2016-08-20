/* Update the style and format of the app depending on pause state.
   See functions below for "pauseOn" and "pauseOff" styles to be set.
********************************************/

pauseUpdate = function (o) {
  paused = o.paused;
  pauseFormatUpdate({
      mode: { color: o.color, html: o.html },
      countdown: { color: o.color, fontSize: o.fontSize },
      animationElements: { addThenRemoveClasses: [
        [outerCircle, o.animations[1]],
        [countdown, o.animations[0]],
        [mode, o.animations[0]]] }
    }); 
};

/* Mode - Pause on:
********************************************/

pauseOn = function() {
  pauseUpdate({
    paused: true,
    color: config.STYLES.TEXT_CONTENT.PAUSED.MODE.COLOR,
    html: config.TEXT.PAUSED,
    fontSize: config.STYLES.TEXT_CONTENT.PAUSED.MODE.FONT_SIZE,
    animations: [config.ANIMATION_CLASSES.ROTATE_IN, config.ANIMATION_CLASSES.PULSE]
  });
  clearInterval(si);
};

/* Mode - Pause off:
********************************************/

pauseOff = function() {
    pauseUpdate({
      paused: false,
      color: config.STYLES.TEXT_CONTENT.UNPAUSED.MODE.COLOR,
      html: '',
      fontSize: config.STYLES.TEXT_CONTENT.UNPAUSED.MODE.FONT_SIZE,
      animations: [config.ANIMATION_CLASSES.ROTATE_IN, config.ANIMATION_CLASSES.PULSE]
    });
    si = setInterval(function() {
      checkAppModeFunc();
    }, config.TIME_INTERVAL.UPDATE_FORMAT);
    mode.style.color = config.STYLES.TEXT_CONTENT.UNPAUSED.MODE.COLOR;
  };

/* Ternary operator that checks if app is paused and call appropriate pause mode functions:
********************************************************************************************/

pauseCheck = function pauseCheck() {
  paused ? pauseOff() : pauseOn();
};

/* Switch operator decides whether to add or subtract a minute from the time values:
*************************************************************************************/

reconfigTimeValuesSwitch = function updateTimeValueSwitch(o) {
  switch(o.operator) {
    case '-':
      if (o.elemVal > 1) setHTML({ element: o.elem, html: o.elemVal - 1 });
      break;
    case '+':
      setHTML({ element: o.elem, html: o.elemVal + 1 })
      break;
  }
};

/* When the user clicks + and - to reconfigure time values, we update and (re)set time values:
**********************************************************************************************/

reconfigTimeValues = function reconfigTimeValues(o) {
  group = o.target.id.split('-'), element = $('#' + group[0] + '-' + group[1]);
  reconfigTimeValuesSwitch({
    operator: $(o.target).html(),
    elem: element,
    elemVal: parseInt($(element).html())
  });
  updateLengthVals();
  setTimeVals();
};

/* Call constructor for various event listeners:
************************************************/

ConstructEventListener(timerVisual, 'click', pauseCheck, false);
ConstructEventListener(sessionLengthDecrement, 'click', reconfigTimeValues, false);
ConstructEventListener(sessionLengthIncrement, 'click', reconfigTimeValues, false);
ConstructEventListener(breakLengthDecrement, 'click', reconfigTimeValues, false);
ConstructEventListener(breakLengthIncrement, 'click', reconfigTimeValues, false);