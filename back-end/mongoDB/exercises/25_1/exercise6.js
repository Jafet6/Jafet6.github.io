db.clientes.aggregate([
  {
    $group: {
      "_id": { "sexo": "$sexo", "UF": "$endereco.uf" },
      "count": { $sum: 1 }
    }
  }
]);
