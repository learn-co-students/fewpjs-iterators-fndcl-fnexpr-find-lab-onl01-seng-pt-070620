const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(o){
  let toReturn = (o.find( ({ result }) => result === "W"));
  if(toReturn){
  return toReturn["year"];
}
}