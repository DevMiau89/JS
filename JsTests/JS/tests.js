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

describe("test3", function(){
    it("should return absolute", function(){
        expect(sumDigits(10)).toEqual(1);
    })
    it("should return absolute", function(){
        expect(sumDigits(99)).toEqual(18);
    })
})

describe("Move Zeros", function(){
    it("should move zeros to the end", function(){
        expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]);
    })
})

describe("Jaden Case", function(){
    it("All first letters to upper", function(){
        var str = "How can mirrors be real if our eyes aren't real"
        expect(str.toJadenCase()).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");
    })
})

describe("Digital Root", function(){
    it("Should return recursive function", function(){
        expect(digital_root(16)).toEqual(7);
    })
})

describe("Solution", function(){
    it("Multiples of passed number", function(){
        expect(solution(10)).toEqual(23);
    })
})

describe("Title Case", function(){
    it("Multiples of passed number", function(){
        expect(titleCase('a clash of KINGS', 'a an the of')).toEqual('A Clash of Kings');
    })
})


describe("Bad Apples", function(){
    it("Zeros remove", function(){
        expect(badApples([[1,3],[7,6],[7,2],[1,3],[0,1],[4,5],[0,3],[7,6]])).toEqual([[1,3],[7,6],[7,2],[1,3],[1,3],[4,5],[7,6]]);
    })
})

describe("Words To Marks", function(){
    it("Alphabet calculator", function(){
        expect(wordsToMarks("attitude")).toEqual(100);
    })
})