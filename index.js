require('seneca')()
  .use('math')
  .listen(9000)
  // .act({role: 'math', cmd: 'sum', left: 1, right: 5}, (err, result) => {
  //   console.log(result);
  // })
