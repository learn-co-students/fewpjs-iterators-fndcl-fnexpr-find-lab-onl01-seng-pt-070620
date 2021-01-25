const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winningYear = array.find( y => y.result === "W" )
  return !!winningYear ? winningYear.year : undefined
}