const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let wins = arr.find(g => g.result === "W")
  return !!wins ? wins.year : undefined
}
