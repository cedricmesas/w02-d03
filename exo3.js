// With a list of relative integers and a number k, create a method returning a boolean that displays whether two numbers in this list have k as the result of their sum.

// For example, if I give you the list [10, 15, 3, 7] and k = 17, the function should output true because 10 + 7 = 17. If I give you the list [1, 8, 10, 21] and k = 19, the function should output false because there are not two numbers having 19 as the result of their addition.

// Exercice 3
// Solve topic 1 with an algorithmic complexity of O (n), i.e. your program will be able to iterate through each element of the array several times (but no nested loop!).

const list = [1, 8, 10, 21]
const k    = 19

class Verification{
  constructor(list,k){
    this.list  = list
    this.k     = k
    this.count = 0
    this.programm(this.list)
  }

  programm(list,n=0){
    let newlist = [...list]
    newlist.splice(n,1)
    for(let i=0; i < newlist.length; i++){
      this.count++
      if (list[n]+newlist[i] == this.k){
        return console.log(true+`, number of comparisons: ${this.count}`) 
      }else if(n == list.length-1){
        return console.log(false+`, number of comparisons: ${this.count}`)
      }
    }
    return this.programm(this.list,n+1)
  }
}

new Verification(list,k)