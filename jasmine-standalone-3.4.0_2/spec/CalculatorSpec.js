describe("add", function () {
    
    it("should be able to add two numbers", function() {
        result = add(1,3);
        expect(result).toBe(4);
    });

    it("should be able to add multiple numbers together", function() {
        result = add(1,2,4,5);
        expect(result).toBe(12);
    });
});

describe("multiply", function() {
    
    it("should be able to multiply two numbers", function() {
        result = multiply(1,2);
        expect(result).toEqual(2);
    });

    it("should be able to multiply multiple numbers", function(){
        result = multiply(1,2,3,4);
        expect(result).toEqual(24)
    });
});
