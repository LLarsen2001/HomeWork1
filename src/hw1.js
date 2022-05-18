//function that takes a number and doubles it
// yarn jest -t 'test doubleNumber'
const doubleNumber = (num) => {
  // TODO
  num = num * 2
  return num ;
};

/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
const isOddOrEven = (num) => {
      // TODO
      if(num % 2 == 0){
        return 'even'
      } else{
        return 'odd'
      }
      
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
const randomNumber = (maxLimit = 5 ) => {
  let rand = Math. random() * maxLimit;
  
  return Math.round(rand);
   // say 99.81321410836433

  // TODO
}


/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test randomNumber'
const calc = (num1, num2, opp) => {
  if(opp === '+') return num1+num2;
  if(opp === '-') return num1-num2;
  if(opp === '*') return num1*num2;
  if(opp === '/') return num1/num2;
  
  
  

  // TODO
};

//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'
const vowelCount = (str) => {
  // TODO
 let vow = 0
  const vowels = ['a','e','o','i','u']
  for(let char of str){
    if(vowels.includes(char)){
      vow++
    }
  }
  return vow
}    



/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  return numbers.reduce(function(a,b) {
    return a + b
  });
}
  // TODO


/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
const getHighNum = (array) => {

let highestValue = array[0];

  array.forEach((num) => {
    if (num > highestValue) {
      highestValue = num
    }
    
  });

  return highestValue
}    
    // TODO
getHighNum([1,2,3])
/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLowNum'
const getLowNum = (array) => {
  let lowestValue = array[0];

  array.forEach((num) => {
    if (num < lowestValue) {
      lowestValue = num
    }
    
  });

  return lowestValue



};
  // TODO

/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {

  let firstNumIndex = 0;
  let secondNumIndex = 1;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[secondNumIndex]-numbers[firstNumIndex] >= 0) {
      firstNumIndex++;
      secondNumIndex++;
    }
  }
      if (secondNumIndex === numbers.length){
        return true;
      }
else {
  return false;
}
      

  
  // TODO
};

//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'
const fizzbuzz = (i) => {
  
    if (i % 15 === 0) return("fizzbuzz");
    else if (i % 3 === 0) return("fizz");
    else if (i % 5 === 0) return("buzz");
    else if (i % 10 === 0) return("buzz");
    else return(i);



  //TODO
};

module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
};