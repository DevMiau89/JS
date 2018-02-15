/**
 * Created by DevMiau on 15-Feb-18.
 */
function formatDuration (seconds) {
  // Complete this function
  if(!seconds) return 'now';
  let result = '';
  let year = 0;
  let day = 0;
  let hour = 0;
  let minutes = 0;

  if(Math.floor(seconds/31536000 > 0)){
    year = Math.floor((seconds / 31536000));
    seconds -= (year * 31536000);
  }
  if(Math.floor(seconds/86400 > 0)){
    day = Math.floor((seconds / 86400));
    seconds -= (day * 86400);
  }
  if(Math.floor(seconds/3600) > 0){
    hour = Math.floor((seconds / 3600));
    seconds -= (hour * 3600);
  }
  if(Math.floor(seconds/60) > 0){
    minutes = Math.floor((seconds / 60));
    seconds -= (minutes * 60);
  }

  console.log(year);
  console.log(hour);
  console.log(minutes);

  let outcomeArray = [];
  if(year !=0){
    year == 1 ? outcomeArray.push(`${year} year`) : outcomeArray.push(`${year} years`);
  }
  if (day != 0){
    day == 1 ? outcomeArray.push(`${day} day`) : outcomeArray.push(`${day} days`);
  }
  if(hour != 0){
    hour == 1 ? outcomeArray.push(`${hour} hour`) : outcomeArray.push(`${hour} hours`);
  }
   if(minutes != 0){
    minutes == 1 ? outcomeArray.push(`${minutes} minute`) : outcomeArray.push(`${minutes} minutes`);
  }
  if(seconds != 0){
    seconds == 1 ? outcomeArray.push(`${seconds} second`) : outcomeArray.push(`${seconds} seconds`);
  }

  if(outcomeArray.length > 2){
    result = outcomeArray.slice(0,-1).join(', ') + " and " + outcomeArray[outcomeArray.length-1];
  } else if (outcomeArray.length == 2) {
    result = outcomeArray.join(' and ');
  } else {
    result = outcomeArray.join('');
  }


  return result;

}