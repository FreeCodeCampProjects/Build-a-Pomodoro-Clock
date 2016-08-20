/*  Update time (in seconds) variables for different modes:
**********************************************************/

updateTimeVals = function updateTimeVals () {
    timeSessionSecs = convertMinutesToSeconds(sessionLengthVal);
    timeBreakSecs = convertMinutesToSeconds(breakLengthVal);
};

/* Convert minutes to seconds:
**********************************/

convertMinutesToSeconds = function convertMinutesToSeconds(m) { return m * 60; };

/* Convert session / break mode minute values to seconds:
**********************************************************/

setTimeVals = function (o) {
    updateTimeVals();
    setHTML({ element: o.html.element, html: o.html.htmlContent });
    $(o.attr.element).attr(o.attr.attribute, config.IMG.AJAX_LOADER);  
};

setTimeVals({
    html: {
        element: mode,
        htmlContent: '<img id="ajax-loader"/>'
    },
    attr: {
        element: '#ajax-loader',
        attribute: 'src'
    }
});