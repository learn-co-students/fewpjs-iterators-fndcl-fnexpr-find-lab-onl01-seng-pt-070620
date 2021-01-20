const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record){
  let game = record.find(win);
  if (game) {
    return game.year;

  } else {
    return undefined;
  }
    
}

function win(obj) {
  return obj.result === "W";
}

function wonGame(game) {
  return game.result === "W"; }