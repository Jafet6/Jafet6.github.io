db.movies.updateOne(
  { "title": "Batman", "cast.character": "Batman" },
  { 
    $push: {
      "cast.$.actor": { 
        $each: [ "Michael Keaton", "Val Kilmer", "George Clooney" ],
        $sort: 1
      }
    }
  }
);

db.voos.updateOne(
  { "vooId": 743217 },
  { $set: { "servicoDeBordo.$[elemento].quantidade": 80 }},
  { $arrayFilters: [{ "elemento.item": "guaraná" }]}
 )
 db.voos.updateOne(
  { "vooId": 743218 },
  { $set: { "servicoDeBordo.$[elemento].quantidade": 100 }},
  { arrayFilters: [{ $or: [{ "elemento.item": "café" }, {"elemento.item": "vinho"}]}]}
 )
