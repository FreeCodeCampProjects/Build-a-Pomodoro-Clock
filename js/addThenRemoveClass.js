/* Add class(es) and then remove them several seconds later. This is
   intented for animation classes (from animate.css library) — we
   need to add, remove and re-add them to re-animate elements.
 ********************************************************************/

addThenRemoveClass = function addThenRemoveClass(element, classes) {
  $(element).addClass(classes);
  setTimeout(function() {
    $(element).removeClass(classes);
  }, config.TIME_INTERVAL.UPDATE_ANIMATION);
};