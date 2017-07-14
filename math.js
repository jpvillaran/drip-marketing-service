module.exports = function math ( options ) {
  this.add({ role: 'math', cmd: 'sum' }, sum);
  this.add({ role: 'math', cmd: 'product' }, product);

  // this.wrap({ role: 'math' }, (msg, respond) => {
  //   msg.left = Number(msg.left).valueOf();
  //   msg.right = Number(msg.right).valueOf();
  //   this.prior(msg, respond);
  // })
  //
  function sum(msg, respond) {
    var out = { answer: Number(msg.left).valueOf() + Number(msg.right).valueOf() };
    console.log('acted sum');
    respond(null, out)
  }

  function product(msg, respond) {
    var out = { answer: Number(msg.left).valueOf() * Number(msg.right).valueOf() };
    console.log('acted product');
    respond(null, out)
  }

}
