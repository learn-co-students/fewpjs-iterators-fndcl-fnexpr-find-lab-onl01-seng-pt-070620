function superbowlWin(records) {
  records.forEach(record => function(record) {
    record.find(function(s) { if (s.result === "W") { return s.year } else { return undefined }})
  })
}