db.vendas.aggregate([
  {
    $match: {
      "dataVenda": {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  },
  {
    $group: {
      "_id": "$clienteId",
      "qnt": { $sum: 1 }
    }
  },
  {
    $match: {
      "qnt": { $lt: 3 }
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
      "_id": 0,
    }
  }
]);
