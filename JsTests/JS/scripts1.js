function validate(n){
    if((n.toString().split('').map(num => Number(num) % 2 ? Number(num) : Number(num) * 2).reduce((a,b) => a+b)) < 16){
      return true;
    }else{
      return false;
    }    
}

function solve(arr){
  //..
  let sortedArr = arr.sort();
  let counts = {};
  let result = [];
  let res = [];
  let output = [];
  for(let i=0; i<sortedArr.length;i++){
    let num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;    
  }
  
   console.log(counts);
  
  for(let num in counts){
      result.push((num.toString()).repeat(counts[num]));
  }
  
  
  result.forEach(function(el){
      res.push(el);
    
  });
  
  res.sort(function(a,b) {
    return b.length - a.length || Number(a) - Number(b);
  });
  
  res.forEach(function(el){
    console.log("El is - " + el);
    let temp = el.split('').map(a => Number(a));
    console.log("Temp is - " + temp);
    output = output.concat(temp);
  });
  
  return output;
 }