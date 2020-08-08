db.vendas.aggregate([
  {
    $group: {
      "_id": "$clienteId",
      "qnt": { $sum: 1 }
    }
  },
  {
    $match: {
      "qnt": {
        $gt: 5
      }
    }
  },
  {
    $group: {
      "_id": null,
      "qntClients": { $sum: 1 }
    }
  },
  {
    $project: {
      "qntClients": 1,
      "_id": 0
    }
  }
]);