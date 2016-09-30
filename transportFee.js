const assert = require('assert');


function transportFee(shift) {
  if (shift === 'morning'){
    return 'R20';
  }
    else if (shift === 'afternoon') {
      return 'R10' ;
    }
    else {
      return 'Gratis' ;
    }
}


assert.equal(transportFee('afternoon'), 'R10');
assert.equal(transportFee('morning'), 'R20');
