function validate(n){
    if((n.toString().split('').map(num => Number(num) % 2 ? Number(num) : Number(num) * 2).reduce((a,b) => a+b)) < 16){
      return true;
    }else{
      return false;
    }    
}