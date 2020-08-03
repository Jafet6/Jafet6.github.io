db.xmen.updateMany(
  { "class": "unknown" },
  {
    $currentDate: {
      "lastUpdate": true,
      "lastUpdate": { $type: "timestamp" } 
    },
    $unset: { "class": "" }
  }
);
