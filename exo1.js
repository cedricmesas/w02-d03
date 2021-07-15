// With a list of relative integers and a number k, create a method returning a boolean that displays whether two numbers in this list have k as the result of their sum.

// For example, if I give you the list [10, 15, 3, 7] and k = 17, the function should output true because 10 + 7 = 17. If I give you the list [1, 8, 10, 21] and k = 19, the function should output false because there are not two numbers having 19 as the result of their addition.

// Exercise 1
// Solve subject 1 with an algorithmic complexity of O (n²), ie your program will have to compare each element with each other using 2 nested loops.

const list = [1, 8, 10, 21]
const k    = 19

class Verification{
  constructor(array,k){
    this.array = array
    this.k     = k
    this.count = 0
    this.programm()
  }

  // Add each numbers to others by 2 nested loops. If equal to k => true else => false
  programm(){
    let result = false
    for(let i = 0; i < this.array.length; i++){
      for(let j = 1; j < this.array.length; j++){
        this.count++
        if(this.array[i]+this.array[j] == this.k){
          return console.log(result = true+`, number of comparisons: ${this.count}`)
        }
      }
    }
    return console.log(result+`, number of comparisons: ${this.count}`)
  }
}

new Verification(list,k)