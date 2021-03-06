db.books.aggregate([
  { $unwind: '$categories' },
  {
    $group: {
      '_id': '$categories',
      'count': { $sum: 1 }
    }
  },
  {
    $sort: {
      count: -1
    }
  }
])