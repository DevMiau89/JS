describe("validate", function(){
    it("should return true or false", function(){
        expect(validate(1714)).toEqual(false);
    })
})

describe("Sort", function(){
    it("should sort values by decreasing frequency", function(){
        expect(solve([2,3,5,3,7,9,5,3,7])).toEqual([3,3,3,5,5,7,7,2,9]);
    })
})

describe("matrixfy", function(){
     it("should return matrix", function(){
        expect(matrixfy('Franklin')).toEqual([['F', 'r', 'a'], ['n', 'k', 'l'], ['i', 'n', '.']]);
    })
})

//describe("validate", function(){
//    it("should return true or false", function(){
//        expect(testit('a')).toEqual('\'a\'');
//    })
//})

describe('betterThanAverage', function(){
    it("sholud return greather than average", function(){
        expect(betterThanAverage([2, 3], 5)).toEqual(true);
    });
    it("sholud return greather than average", function(){
        expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toEqual(true);
    });
    it("sholud return less than average", function(){
        expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toEqual(false);
    })
})