const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(record){
  const r =  record.find(function(r){
    return r.result === "W";
  });
  return r ? r.year : undefined;
}
