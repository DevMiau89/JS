function camelCase(string) {
  result = "";
  for(let i = 0; i < string.length; i++) {
    if(string[i] == string[i].toUpperCase()) {
      result += " ";
      result += string[i];
    }else{
      result += string[i];
    }
  }
  return result;
}

function pigIt(str){
  //Code here
  let result = [];
  let arr = str.split(' ');
  for(let i=0; i < arr.length; i++){
    let pigWord = (arr[i] + arr[i].slice(0,1) + 'ay').substring(1);
    result.push(pigWord);
  }
  return result.join(' ');
}
