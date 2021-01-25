const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(function(data) {
    return data.result === "W"
  });
  if (result)
    return result.year
  else 
    return undefined
}

