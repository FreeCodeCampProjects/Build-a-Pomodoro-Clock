/* 
 ****************************************************/
 
updateMode = function updateMode(m, ind, brkLen) {
  updateValues(m);
  setMode(ind, 'p');
  brkLen == breakLengthVal ? 
    timeBreakSecs = convertMinutesToSeconds(brkLen) : 
    timeSessionSecs = convertMinutesToSeconds(brkLen);
};