db.xmen.updateMany(
  { $or: [ { "class": "omega" }, { "class": "gama" } ] },
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $max: { "power": 500 }
  }
);
