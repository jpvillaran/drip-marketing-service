require('seneca')()
  .client(9000)
  .act({role: 'math', cmd: 'sum', left: 5, right: 6},  (err, result) => {
    console.log(result);
  });
