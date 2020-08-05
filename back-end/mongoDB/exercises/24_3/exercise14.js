db.movies.find(
  {
    "rating": {
      $size: 4
    },
    "category": {
      $all: [ "adventure", "family" ]
    },
    "imdbRating": { $gte: 7 }
  }
);
