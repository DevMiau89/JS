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

function* generator(str){
    var x = str.split('');
    for(var i=0; i < x.length; i++){
       yield x[i]; 
    }
    
}

var n = generator("yolo");
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());

function generator(input){
	var i = 0;	
	return {
		next: function(){
            var arr = input.split('');
            
            if(i < arr.length){
                i++;
                return arr[i-1];
			return "";	
		}
		
		
	}
	
  }
}

var myGen = generator('boom');
console.log(myGen.next());
console.log(myGen.next());