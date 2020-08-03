db.xmen.updateMany(
  { $and: [ { "occupation": "Junior Staff" }, { "area": { $exists: false } } ] },
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $set: { "area": [ "outside" ] }
  }
);
