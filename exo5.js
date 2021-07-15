// With a list of relative integers and a number k, create a method returning a boolean that displays whether two numbers in this list have k as the result of their sum.

// For example, if I give you the list [10, 15, 3, 7] and k = 17, the function should output true because 10 + 7 = 17. If I give you the list [1, 8, 10, 21] and k = 19, the function should output false because there are not two numbers having 19 as the result of their addition.

// Exercise 5
// Solve topic 1 by making only one passage on your list.

const list = [10, 15, 3, 7]
const k    = 17

class Verification{
  constructor(list,k){
    this.list  = list
    this.k     = k
    this.count = 0
    this.programm(this.list,this.k)
  }

  // Create a new array with the difference of k and the elements of array. After verify for all element if includes one of new array elements. If includes return true...
  programm(list,k){
    let tempArray = []
    tempArray.push(k - list[0])
    for (let i = 1; i < list.length; i++){
      this.count++;
      if (tempArray.includes(list[i])) {
        return console.log(true+`, number of comparisons: ${this.count}`);
      } else {
        tempArray.push(k - list[i]);
      }
    }
    return console.log(false+`, number of comparisons: ${this.count}`);
  }
}

new Verification(list,k)