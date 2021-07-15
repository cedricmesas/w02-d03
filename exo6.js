// We will give you a list containing the height (in floors) of buildings belonging to a street, from east to west. A real estate agent would like you to write an algorithm that returns how many buildings on that street have at least one apartment with a view of the setting sun (to the west), in order to properly assess the value of the buildings on the street.

// For example, with the list [3, 7, 8, 3, 6, 1], the function should return 3, since the highest floor of buildings with size 8, 6, and 1 all have a view West. Or another example the list [1, 4, 5, 8] should return 1 since only the last building has at least one apartment with a view to the west.

// Exercise 6
// Solve topic 2 by making only one passage on your list.

const list = [3, 7, 8, 3, 6, 1]

class HowManyBuilding{
  constructor(list){
    this.list          = list
    this.count         = 0
    this.buildings     = []
    this.programm(this.list)
  }

  // Push the last element of the array in a new array & compare in declining. If is bigger than the last element of the new array, add it to the new array. The answer is the length of the new array
  programm(list){
    this.buildings.push(list[list.length-1])
    for (let i=list.length-2; i>=0; i--){
      this.count++
      if(list[i]>this.buildings[this.buildings.length-1]){
        this.buildings.push(list[i])
      }
    }
    return console.log(`Numbers of buildings can see sunset : ${this.buildings.length}. Numbers of comparisons : ${this.count}`)
  }
}

new HowManyBuilding(list)