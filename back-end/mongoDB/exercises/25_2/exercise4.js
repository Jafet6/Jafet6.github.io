db.clientes.aggregate([
  {
    $addFields: {
      "idade": {
        $floor: {
          $divide: [
            { $subtract: [ "$$NOW", "$dataNascimento" ] },
            { $multiply: [ 86400000, 365 ] }
          ]
        }
      }
    }
  },
  {
    $match: {
      "idade": { $gte: 18, $lte: 25 }
    }
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras"
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-31")
      }
    }
  }
]);