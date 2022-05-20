//1. write a function that takes an array of numbers
// and return a new array with value doubled

// part1 write a function that doubles a number and test
/**
 * doubles a number
 * @param  {number} num
 * @return  {number} number times 2
 */
 const doubleNum = (num) => {
   num = num *2
   return num
   //TODO
  };
  
  // part 2 use the method from above to double numbers in new array
  /**
   * doubles numbers from given array into a new array
   * @param  {[number]} arr: an array of numbers to be doubled
   * @return {[number]} a NEW array with numbers doubled
   */
  const doubleArray = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return(newArr) ;
      
      

    
      
   
     //TODO
  };
  
  //2. write a function that takes an array of numbers
  // and return a new array with only the even ones
  
  // part1 write a function that takes number and return true if even
  /**
   * returns true if num is even false otherwise
   * @param  {number} a integer
   * @return  {boolean} true if number was even false otherwise
   */
  const isEven = (num) => { 
    
   
    for(let i = 0; i < num; i++){
      
      return num%2===0 || num===0
   
      }
  };
  
  // part 2 use the method from above to double numbers in new array
  /**
   * doubles numbers from given array into a new array
   * @param  {[number]} arr: an array of numbers to be doubled
   * @return {[number]} a NEW array with numbers doubled
   */
  const filterEvens = (arr) => {
    
     for(let i = 0; i < arr.length; i++){
      let theEven=arr.filter(x => x % 2 === 0)

      return theEven
    }
          //TODO
  };
  
  isEven;
  
  module.exports = {
    doubleNum,
    doubleArray,
    isEven,
    filterEvens,
  };
  