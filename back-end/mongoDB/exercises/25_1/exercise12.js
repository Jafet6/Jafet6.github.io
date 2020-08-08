db.vendas.aggregate([
  {
    $match: {
      "dataVenda": {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-12-31")
      }
    }
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "qntUF"
    },
  },
  {
    $unwind: "$qntUF"
  },
  {
    $group: {
      "_id": "$qntUF.endereco.uf",
      "sells": { $sum: 1 }
    }
  },
  {
    $sort: { "sells": -1 }
  },
  {
    $limit: 3
  },
  { 
    $project: {
      "_id": 0,
      "uf": "$_id",
      "sells": 1
    }
  }
]).pretty();
