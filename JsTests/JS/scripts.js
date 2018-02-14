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
