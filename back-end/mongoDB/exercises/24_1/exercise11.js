db.movies.updateOne(
  { "title": "Home Alone" },
  { 
    $currentDate: {
      "lastUpdated": true,
      "lastUpdated": { $type: "timestamp" }
    }
  }
);
