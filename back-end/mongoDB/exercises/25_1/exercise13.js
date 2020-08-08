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
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "UF"
    },
  },
  {
    $unwind: "$UF"
  },
  {
    $group: {
      "_id": "$UF.endereco.uf",
      "sells": { $sum: 1 },
      "average": { $avg: "$valorTotal" }
    }
  },
  {
    $sort: { "_id": 1 }
  },
  {
    $project: {
      "_id": 0,
      "uf": "$_id",
      "mediaVendas": "$average",
      "totalVendas": "$sells"
    }
  }
]);
