function Calculator(){

    this.add = function(){
        var result = 0;
        for(var i = 0; i < arguments.length; i++){
            result += parseFloat(arguments[i]);
        }
        return result;
    };
    
    this.multiply = function(){
        var result = 1;
        for(var j = 0; j < arguments.length; j++){
            result *= parseFloat(arguments[j]);
        }
        return result;
    };
    
    this.subtract = function(){
        for(var i = 0; i < arguments.length; i++){
            var result = arguments[i];
            result -= parseFloat(arguments[i++]);
        }
        return result;
    };
    
}