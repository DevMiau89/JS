describe("test", function(){
    it("should return true", function(){
        expect(camelCase('camelCasing')).toEqual('camel Casing');
    })
    
})

describe("test1", function(){
    it("should assert equal", function() {
        expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay');
    })
})