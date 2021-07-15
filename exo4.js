// We will give you a list containing the height (in floors) of buildings belonging to a street, from east to west. A real estate agent would like you to write an algorithm that returns how many buildings on that street have at least one apartment with a view of the setting sun (to the west), in order to properly assess the value of the buildings on the street.

// For example, with the list [3, 7, 8, 3, 6, 1], the function should return 3, since the highest floor of buildings with size 8, 6, and 1 all have a view West. Or another example the list [1, 4, 5, 8] should return 1 since only the last building has at least one apartment with a view to the west.

// Exercie 4
// Solve topic 2 with an algorithmic complexity of O (n), i.e. your program will be able to iterate through each element of the array several times (but no nested loop!).

const list = [1, 4, 5, 8]

class HowManyBuilding{
  constructor(list){
    this.list          = list
    this.count         = 0
    this.buildingCount = 0
    this.programm(this.list)
  }

  programm(list,n=0){
    let temp = true
    for(let i = n+1;i<list.length; i++){
      this.count++
      if(list[n]<list[i]){
        temp = false
      }
    }
    if(temp){
      this.buildingCount++
    }
    if(n>=list.length-1){
      return console.log(`Numbers of buildings can see sunset : ${this.buildingCount}. Numbers of comparisons : ${this.count}`)
    }else{
      return this.programm(this.list,n+1)
    }
  }
}

new HowManyBuilding(list)