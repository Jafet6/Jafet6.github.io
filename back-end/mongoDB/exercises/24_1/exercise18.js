db.xmen.updateMany(
  { "class": "gama" },
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $min: { "power": 300 }
  }
);
