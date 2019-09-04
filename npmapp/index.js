const _ = require('lodash');

const numbers = [1,2,3,4,5,6,7,8,9];

_.each(numbers,function(number,i){
    console.log(i+')',number)
});