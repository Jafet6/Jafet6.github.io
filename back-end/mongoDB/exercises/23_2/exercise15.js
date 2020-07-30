db.superherosColec.find({
  $and:[
    { $and: [ { "aspects.weight": { $gt: 80 } }, { "aspects.weight": { $lt: 100 } } ] },
    { $or: [ { "race": "Human" }, { "race": "Mutant" } ] },
    { "publisher": { $not: /DC Comics/ } }
  ]
})
