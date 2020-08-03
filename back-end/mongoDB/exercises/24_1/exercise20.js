db.xmen.updateMany(
  { $or: [
      { $and: [ { "occupation": "Senior Staff" }, { "power": { $gt: 100 } } ] },
      { $and: [ { "occupation": "Junior Staff" }, { "power": { $gt: 200 } } ] }
    ] 
  },
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $set: { "area": [ "Students Room" ] }
  }
);
