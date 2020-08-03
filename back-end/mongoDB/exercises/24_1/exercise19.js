db.xmen.updateMany(
  { "class": { $exists: false } },
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $inc: { "power": -100 }
  }
);
