db.xmen.updateMany(
  {},
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $rename: { "name": "hero_name", "true_name": "full_name" },
    $set: { "power": 100 }
  }
);
