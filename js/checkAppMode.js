/* Set the feedback text (the mode and time values):
 ****************************************************/

setFeedbackText = function() {
  setHTML({element: mode, html: appModeIndex });
  setCSS([
    [child, ['top', 100 - completed + config.TEXT.PERCENT]],
  ]);
}

/* Check which mode is enabled and update accordingly:
 *****************************************************/
 
checkAppMode = function checkAppMode(o) {
  // If mode is "session" pass session data.
  if (appModeIndex == appModesArr[0]) timeSessionSecs > 0 ? updateValues(o.session) : updateMode(o.break, 1, breakLengthVal);
  // If mode is "break" pass break data.
  else if (appModeIndex == appModesArr[1]) timeBreakSecs > 0 ? updateValues(o.break) : updateMode(o.session, 0, sessionLengthVal)
  setFeedbackText();
};