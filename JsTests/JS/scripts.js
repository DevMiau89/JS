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

function getCount(str) {
  var vowelsCount = 0;  
  // enter your majic here  
  str.split('').forEach((el) => (el === 'a') || (el === 'e') || (el === 'i') || (el === 'o') || (el === 'u') ? vowelsCount++ : vowelsCount);
  return vowelsCount;
}

function removeSmallest(numbers) { 
  let min = Math.min.apply( null, numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
  
}

function sumDigits(number) {   
   return number.toString().split('').filter(el => el != '-').reduce((a,b) => (Number(a) + Number(b)), 0);
}

var moveZeros = function (arr) {
  // TODO: Program me
  zerosArr = [];
  restArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
      zerosArr.push(arr[i])
    }else(
      restArr.push(arr[i])
    )
  }
  console.log(zerosArr);
  console.log(restArr);
  return restArr.concat(zerosArr);
  
}

String.prototype.toJadenCase = function () {
   return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function digital_root(n) {
  // ...  
   if(n.toString().length === 1){
     return n;     
   } else {
     return digital_root(n.toString().split('').reduce((a,b) => Number(a) + Number(b)));
     
   }       
}

function solution(number){
  let result = 0;
  for(let i=0; i < number; i++) {
    if(i % 3 === 0 || i % 5 == 0){
      result += i;
    }      
  } 
  return result;
}

function titleCase(title, minorWords) {
    if(typeof minorWords === 'undefined'){
      return title.replace(/\w\S*/g, (el) =>  el.charAt(0).toUpperCase() + el.substr(1).toLowerCase());
    }else {
      let result = [];
      let articles = minorWords.split(' ').map(article => article.toLowerCase());      
      let words = title.split(' ');

      for(let i=0; i<words.length; i++){
          if(articles.includes(words[i].toLowerCase())  && i != 0){           
            result.push(words[i].toLowerCase());       
          }else{
            result.push(words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase()) + ',';
          }
        }        
      return result.join(' ');  
    }
}

function badApples(input) {
  let result = [];
  let index = 0;
  let counter = 0;
  for(let i=0; i<input.length;i++){
      
      if(input[i][0] !== 0 && input[i][1] !== 0){
        console.log("No zero = " + input[i]);
        result.push(input[i]);     
      }
      else if(input[i][0] == 0 && input[i][1] == 0){console.log("Both zero = " + input[i]);}
      else if(input[i][0] == 0 || input[i][1] == 0) {
        let noZerosNum = input[i].filter(num => num !== 0);
        console.log("One zero = " + input[i]);
        console.log(noZerosNum);
        if(counter % 2 == 0){
            result.push(noZerosNum);
            index = result.length-1;
        }else {
          let t = result[index].concat(noZerosNum); 
          result[index] = t;
        }    
        counter++;
      }
    

  }
  
  for(let i=0; i<result.length;i++){
    if(result[i].length === 1){
      result.splice(i, 1);    
    }
  }
  return result;
}

function wordsToMarks(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
  return string.split('').map(char => alphabet.indexOf(char) + 1)
        .reduce((a,b) => a+b);
 
}