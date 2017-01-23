'use strict';

class Robot {
  constructor(){
    this.validDirections = [ 'north', 'east', 'south', 'west' ];
  }
  orient(direction){
    if (this.validDirections.includes(direction)){
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing');
    }
  }
  turnRight(){
    var index = this.validDirections.indexOf(this.bearing)
    if(index >= 0 && index < this.validDirections.length - 1){
      this.bearing = this.validDirections[index + 1]
    } else {
      this.bearing = this.validDirections[0]
    }
  }
  turnLeft(){
    var index = this.validDirections.indexOf(this.bearing)
    if(index >= 1 && index < this.validDirections.length){
      this.bearing = this.validDirections[index - 1]
    } else {
      this.bearing = this.validDirections[this.validDirections.length - 1]
    }
  }
  at(x, y){
    this.coordinates = [x, y]
  }
  advance(){
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }
  instructions(directionLetter){
    directionLetter.split('').forEach(function(letter){
      switch (letter) {
      case 'L':
        turnLeft()
        break
      case 'R':
        turnRight()
        break
      case 'A':
        advance()
        break
      }
    })
  }
}
