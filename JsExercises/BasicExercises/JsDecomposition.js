function decompose(m) {
    // your code
    const result = [];

    let rest = Math.pow(m,2); //13

    for (let i=m-1; i > 0; i--) {
      if(Math.pow(i, 2) <= rest) {
        result.push(i);
        rest -= Math.pow(i, 2);
        console.log(rest);
        }
    }
    
    if(result.length == 1){
      return null;
    }
    if(!!result.reduce(function(a, b){ return (a === b) ? a : NaN; })){
      return null;
    };
    

    let sortedResult = result.sort((a,b) => (a-b));
    return sortedResult
      
}

function decompose(n) {
    let square = n * n;
    for (let i = n - 1; i > 0; i--) {
        let sum = 0, result = [];
        for (let j = i; j > 0; j--) {
            if (sum + j * j <= square) {
                result.unshift(j);
                sum += j * j;
            }
            if (sum === square) return result;
        }
    }
    return null;
}
