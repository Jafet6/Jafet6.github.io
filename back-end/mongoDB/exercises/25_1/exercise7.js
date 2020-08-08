db.clientes.aggregate([
  {
    $group: {
      "_id": { "sexo": "$sexo", "UF": "$endereco.uf" },
      "count": { $sum: 1 }
    }
  },
  {
    $project: {
      "_id": 0,
      "estado": "$_id.UF",
      "sexo": "$_id.sexo",
      "total": "$count"
    }
  }
]);
