/* Helper function for addThenRemoveClass:
********************************************/

addThenRemoveClasses = function (o, addRemoveClasses) {
  for (i = 0; i < addRemoveClasses.length; i++) {
    addThenRemoveClass(addRemoveClasses[i][0], addRemoveClasses[i][1]);
  }
};

/* Initiate a specially-formated pause screen when user pauses the app:
***********************************************************************/

pauseFormatUpdate = function pauseFormatUpdate(o) {
  setHTML({ element: mode, html: o.mode.html });
  setCSS([
    [mode, ['color', o.mode.color]],
    [countdown, ['color', o.countdown.color]],
    [countdown, ['font-size', o.countdown.fontSize]]
  ]);
  addThenRemoveClasses(o, o.animationElements.addThenRemoveClasses);
};