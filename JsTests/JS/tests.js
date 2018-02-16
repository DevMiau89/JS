describe("test", function(){
    it("should return true", function(){
        expect(camelCase('camelCasing')).toEqual('camel Casing');
    })
    
})

describe("test1", function(){
    it("should assert equal", function() {
        expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
    })
    it("should assert equal", function() {
        expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay');
    })
})

describe("test3", function(){
    it("should be defined", function(){
        expect(getCount('abracadabra')).toEqual(5);
    })
})

describe("test4", function(){
    it("should remove smallest", function(){
        expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    })
     it("should remove smallest", function(){
        expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
    })
     it("should remove smallest", function(){
        expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
    })
})