db.clientes.aggregate([
  {
    $group: {
      "_id": "$sexo",
      "count": { $sum: 1 }
    }
  }
]);