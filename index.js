const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (records) => {
  let winner = records.find(record => {
    return record.result === 'W'
  })
  return !!winner ? winner.year : undefined
}