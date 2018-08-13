//var dataFromServer = [{
//    "Name": "John Smith",
//    "Birthday": "\/Date(1330848000000-0800)\/"
//}, {
//    "Name": "Jane Smith",
//    "Birthday": "\/Date(1320825600000-0800)\/"
//}];
//
//var dataFromServer = dataFromServer.map(function (item) {
//    return {
//        name: item.Name,
//        birthday: moment(item.Birthday).toDate()
//    };
//});
//
//console.log("mapped", dataFromServer);
//
//Object.defineProperty(window, "MEANING_OF_LIFE", {
//  writable: true,
//  value: 42
//});
//
//console.log(window.MEANING_OF_LIFE);
//window.MEANING_OF_LIFE = 24;
//console.log(window.MEANING_OF_LIFE);
//
//
//var easyCombination = [13],
//  hardCombination   = new Array(42, 16, 21),
//  combined = easyCombination.concat(hardCombination);
//
//console.log(JSON.stringify(combined));
//
//
//var dataFromServer = '{ "name": "John Smith", "phone": [ "555-123-4567", "123-456-7890" ], "age": 28 }';
//
//
//var dataToStringify = {
//    name: 'John Smith',
//    phone: ['555', '666'],
//    age: 28
//}
//
//var toStr = JSON.stringify(dataToStringify);
//var parsed = JSON.parse(dataFromServer);
//
//console.log(parsed);
//console.log(toStr);
//console.log(parsed);

//var x = 2;
//
//function doSomething(success, failure){
//    if(x === 2){
//      return success(x);  
//    }else{
//      return failure();    
//    }
//}
//
//function doSomethingElse(res, success, failure){
//    if(res === 3){
//      return success(res);  
//    }else{
//      return failure();    
//    }
//}
//
//function doThirdThing(newRes, success, failure){
//    if(newRes === 2){
//      return success(newRes);  
//    }else{
//      return failure();    
//    }
//}
//
//function failureCallback(){
//    console.log('fail');
//}
//
//
//doSomething(function(result){
//    doSomethingElse(result,function(newResult){
//        doThirdThing(newResult, function(finalResult){
//            console.log('The final result: '+ finalResult)
//        }, failureCallback);
//    }, failureCallback);
//}, failureCallback);
//
//
//var promise1 = new Promise(function(resolve, reject){
//     if(x === 2){
//      return resolve(x);  
//    }else{
//      return reject();    
//    }
//})  
//
//var promise2 = new Promise(function(resolve, reject){
//     if(x === 2){
//      return resolve(x);  
//    }else{
//      return reject();    
//    }
//})
//
//var promise3 = new Promise(function(resolve, reject){
//     if(x === 2){
//      return resolve(x);  
//    }else{
//      return reject();    
//    }
//})
//
//promise1.then(function(result){
//    return promise2
//}).then(function(result){
//    return promise3
//}).then(function(result){
//    console.log(result + ' finished')
//}).catch(function(error){
//    console.log('Something went wrong');
//})


var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

function findLargest(arr){
    arr.sort(function(a,b){
        return a - b;   
    })   
    return arr;
}
//console.log(findLargest(unsortedArray));

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];

var sorted = findLargest(arrayOfIntegers);

console.log(sorted)

for(var i=0; i < sorted.length-1; i++){
    if(sorted[i + 1] !== sorted[i] + 1){
           console.log(sorted[i] + 1);
       }
}

//function* generator(str){
//    var x = str.split('');
//    for(var i=0; i < x.length; i++){
//       yield x[i]; 
//    }
//    
//}
//
//var n = generator("yolo");
//console.log(n.next());
//console.log(n.next());
//console.log(n.next());
//console.log(n.next());
//console.log(n.next());
//
//function generator(input){
//	var i = 0;	
//	return {
//		next: function(){
//            var arr = input.split('');
//            
//            if(i < arr.length){
//                i++;
//                return arr[i-1];
//			return "";	
//		}
//		
//		
//	}
//	
//  }
//}
//
//var myGen = generator('boom');
//console.log(myGen.next());
//console.log(myGen.next());