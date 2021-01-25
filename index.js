const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = () => record.find(function win(obj) {
  if (obj.result === 'W')
    return obj.year
})

// attempt 2
let winning = record.find((r) => {
  if (r.result === 'W') {
    return r.year
  }
});

// solution 2 using iteration
function search(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
          return myArray[i];
      }
  }
}

var win = search("W", record);
