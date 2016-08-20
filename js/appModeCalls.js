/* When called, this function calls the checkAppMode function and
   passes "session" and "break" mode data:
*********************************************************************/

checkAppModeFunc = function checkAppModeFunc() {
  checkAppMode({
    session: {
        session: true,
        lengthVal: sessionLengthVal,
        timeValue: timeSessionSecs,
        styles: {
          backgroundColor: config.STYLES.SESSION.BKG,
          border: config.STYLES.SESSION.BORDER
        }
    },
    break: {
      session: false,
      lengthVal: breakLengthVal,
      timeValue: timeBreakSecs,
      styles: {
        backgroundColor: config.STYLES.BREAK.BKG,
        border: config.STYLES.BREAK.BORDER
      }
    }    
  });
};