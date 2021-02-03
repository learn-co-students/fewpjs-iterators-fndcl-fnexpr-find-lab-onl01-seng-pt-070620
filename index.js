const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
 
// ]

function superbowlWin(array){
  let r = array.find((record) => {
    return record.result === "W"
  });
  if (r === undefined){
    return r
  } else {
    return r.year
  };
}