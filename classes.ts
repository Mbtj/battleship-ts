
// 10x10 grid A-J, 1-10

// Ships superclass
interface Ship {

}
// Carrier 5 tiles long
// Battleship 4 tiles long
// Cruiser 3 tiles long
// Submarine 3 tiles long
// Destroyer 2 tiles long

/** Players
 * - Turns between player 1 and player 2
 * - Has turns (note for game class)
 * - has live ships array
 * - has dead ships array (maybe)
 * - A player wins *game* when opposing player has no live ships 
 * - Shoots missiles and HITS or MISSES 
 */
class PlayerGrid {
  name: string;
  ships: object;
  grid: Number[][];

  constructor(name: string) {
    this.name = name;

    this.ships = {
      carrier: true,
      battleship: true,
      cruiser: true,
      submarine: true,
      destroyer: true
    }
  }

  //place one of the ships on your grid
  placeShip(shipName: string): void {

  }

  // attack from opposing team
  // coords gives a letter and number e.g A1
  // returns string for whether there is a hit or miss
  attackShip(coords: string): string {
    
    return ''
  }
  
}
/** Game
 * logs events in the game
 * reports victory/loss and end of game
 * 
 */

