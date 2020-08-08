db.vendas.aggregate([
  {
    $match: {
      "dataVenda": {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31")
      }
    }
  },
  {
    $group: {
      "_id": "$clienteId",
      "amount": { $sum: "$valorTotal" }
    }
  },
  {
    $sort: {
      "amount": -1
    }
  },
  {
    $limit: 10
  }
]);
