describe("Calculator", function(){
    let calculator = new Calculator();
    describe("add", function () {
    
        it("should be able to add two numbers", function() {
            result = calculator.add(1,3);
            expect(result).toBe(4);

            result = calculator.add(5.5,1,2);
            expect(result).toBe(8.5);
        });
    
        it("should be able to add multiple numbers together", function() {
            result = calculator.add(1,2,4,5);
            expect(result).toBe(12);
    
            result = calculator.add(5.5,0,0,5);
            expect(result).toEqual(10.5);
        });
    });
    
    describe("multiply", function() {
        
        it("should be able to multiply two numbers", function() {
            
            result = calculator.multiply(1,2);
            expect(result).toEqual(2);

            result = calculator.multiply(4.5,2);
            expect(result).toEqual(9);
        });
    
        it("should be able to multiply multiple numbers", function(){
            
            result = calculator.multiply(1,2,3,4);
            expect(result).toEqual(24);

            result = calculator.multiply(6.2,2,1);
            expect(result).toEqual(12.4);

        });
    });
    
    it("should remember last result", function(){
        expect(calculator.add(1,2)).toEqual(3);
        expect(calculator.last()).toEqual(3);
    });

    it("should use the last value as an argument", function(){
       expect(calculator.add(1,2)).toEqual(3);
       expect(calculator.multiply(calculator.last(),5)).toEqual(15); 
    });

    it("should allow calculator to remember more stuff", function(){
        expect(calculator.add(1,2)).toEqual(3);
        expect(calculator.set_slot(1)).toEqual(3);
        expect(calculator.get_slot(1)).toEqual(3);
    });
});
