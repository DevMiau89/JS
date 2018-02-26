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
    let temp = el.split('').map(a => Number(a));
    output = output.concat(temp);
  });
  
  return output;
 }

const matrixfy = str => {
  // code here

  let result = [];
  let arr = str.split('');
  console.log(arr);
  let matrixCount = 0;
  
  for(let i=0; matrixCount < arr.length; i++){
    matrixCount = i * i;
    }
  let dots = matrixCount - arr.length;
  for(let i=0; i<dots; i++){
      arr.push('.');      
  }
  let matrixDimension = Math.sqrt(matrixCount);
  for(let i=0; i < matrixCount; i+=matrixDimension){
      result.push(arr.slice(i,i+matrixDimension));    
  }
  if(result.length == 0){return 'name must be at least one letter'}
  return result;
};