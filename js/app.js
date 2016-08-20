/* Global variables. 
   Constructors in TitleCase,
   Constants in UPPERCASE,
   All other (block-scope) variables in camelCase
***************************************************/

let addThenRemoveClass, addThenRemoveClasses,
    appModeIndex, appModesArr, 
    breakLength, breakLengthDecrement, breakLengthIncrement, breakLengthVal,
    checkAppMode, checkAppModeFunc,
    child,
    completed,
    config,
    ConstructEventListener,
    countdown, current, date, end,
    formatTime,
    group,
    mode,
    i,
    outerCircle,
    pauseCheck, pauseFormatUpdate, pauseOff, pauseOn, pauseUpdate, paused,
    reconfigTimeValues,
    sessionLength, sessionLengthDecrement, sessionLengthIncrement, sessionLengthVal,
    setCSS, setFeedbackText, setHTML, setMode, setTimeVals, setStyleTimeout,
    si,
    start,
    timeBreak, timeSessionSecs,
    timerVisual,
    updateLengthVals, updateMode, updateTimeVals, updateTimeValues, updateTimeValueSwitch, updateValues;

/* Get HTML elements by ID and cache as variables:
**************************************************/

sessionLengthDecrement = $('#session-length-decrement')[0];
sessionLengthIncrement = $('#session-length-increment')[0];
breakLengthDecrement = $('#break-length-decrement')[0];
breakLengthIncrement = $('#break-length-increment')[0];
outerCircle = $('#outer-circle')[0];
timerVisual = $('#timer-visual')[0];

/* Pause state. If "paused" is true, the app is paused.
**********************************************************/

paused = false;

/* List of modes our app will use:
**********************************/

appModesArr = ['session', 'break'];
appModeIndex = appModesArr[0];

/* XXXXXXXdssksflkslkdlfkdspopdosfpls;fvk;flsfsl
**************************************************/

child = $('#child')[0];
countdown = $('#countdown')[0];
mode = $('#mode')[0];
$(mode).html(appModeIndex);
sessionLength = $('#session-length')[0];
sessionLengthVal = $(sessionLength).html();

/* Set an initial break mode time value:
**************************************************/

timeBreak = 5;

/* Cache the break mode element and its value:
**************************************************/

breakLength = $('#break-length')[0];
breakLengthVal = $(breakLength).html();

/* When the user changes the length of a session or break,
   this function will update values of corresponding variables:
**************************************************************/

updateLengthVals = function () {
    sessionLength = $('#session-length')[0];
    sessionLengthVal = $(sessionLength).html();
    breakLength = $('#break-length')[0];
    breakLengthVal = $(breakLength).html();;
};

/* Helper function for setting HTML values:
**************************************************/

setHTML = function(o) {
  $(o.element).html(o.html);
};

/* Helper function for setting (multiple) CSS values:
*****************************************************/

setCSS = function(arr) {
  for (i = 0; i < arr.length; i++) {
    $(arr[i][0]).css(arr[i][1][0], arr[i][1][1]);
  }
};