function superbowlWin (record) {
const result = record.find( r => r.result === "W")
return (!!result) ? result.year : undefined
}