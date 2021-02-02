

const superbowl = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

superbowlWin = (superbowl) => {
  let result = superbowl.find( superbowl => superbowl.result === "W" )
  return !!result ? result.year : undefined
}
