const testVar = {}

function testFunc() {
  return "hi"
}

const record = {}

function superbowlWin(record) {
  let result = record.find(record => 
    record.result === "W")
  if (result) {
  return result.year
  } else
  undefined
}
