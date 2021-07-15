// We will give you a list containing the height (in floors) of buildings belonging to a street, from east to west. A real estate agent would like you to write an algorithm that returns how many buildings on that street have at least one apartment with a view of the setting sun (to the west), in order to properly assess the value of the buildings on the street.

// For example, with the list [3, 7, 8, 3, 6, 1], the function should return 3, since the highest floor of buildings with size 8, 6, and 1 all have a view West. Or another example the list [1, 4, 5, 8] should return 1 since only the last building has at least one apartment with a view to the west.

// Exercise 2
// Solve subject 2 with an algorithmic complexity of O (n²), ie your program will have to compare each element with each other using 2 nested loops.

const list = [3, 7, 8, 10, 3, 6, 1]

class HowManyBuilding{
  constructor(list){
    this.list          = list
    this.count         = 0
    this.buildingCount = 0
    this.programm(this.list)
  }

  programm(list){
    for( let i = 0; i < list.length; i++){
      let temp = true
      for(let j = i+1; j < list.length; j++){
        this.count++
        if(list[i] < list[j]){
          temp = false
        }
      }
      if(temp){
        this.buildingCount++
      }
    }
    console.log(`Numbers of buildings can see sunset : ${this.buildingCount}. Numbers of comparisons : ${this.count}`)
  }
}

new HowManyBuilding(list)