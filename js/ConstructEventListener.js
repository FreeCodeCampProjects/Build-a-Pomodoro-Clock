/* Function for adding event listeners that works with both the
   "addEventListener" method and the older "attachEvent" method seen in IE.
***************************************************************************/

ConstructEventListener = function ConstructEventListener (elem, event, fn, useCapture) {
    window.addEventListener ?
        elem.addEventListener(event, fn, useCapture) :
        elem.attachEvent('on' + event, fn, useCapture);
};