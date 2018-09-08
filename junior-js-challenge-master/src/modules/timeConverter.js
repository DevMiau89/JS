function leadingZero(i) {
    return (i < 10)? '0'+i : i;
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = leadingZero(a.getMonth() + 1);
  var date = leadingZero(a.getDate());
  var hour = leadingZero(a.getHours());
  var min = leadingZero(a.getMinutes())
  var sec = leadingZero(a.getSeconds());
  var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


export { timeConverter }