class Calculator {
    constructor() {
        this.add = function (last) {
            last = new last();
            var result = 0;
            for (var i = 0; i < arguments.length; i++) {
                result += parseFloat(arguments[i]);
            }
            return result;
        };
        
        this.multiply = function(last){
            last = new last();
            var result = 1;
            for(var j = 0; j < arguments.length; j++){
                result *= parseFloat(arguments[j]);
            }
            return result;
        };
    }
}