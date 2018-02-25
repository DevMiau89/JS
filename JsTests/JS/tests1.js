describe("validate", function(){
    it("should return true or false", function(){
        expect(validate(1714)).toEqual(false);
    })
})

describe("Sort", function(){
    it("should sort values by decreasing frequency", function(){
        expect(solve([2,3,5,3,7,9,5,3,7])).toEqual([3,3,3,5,5,7,7,2,9]e);
    })
})