const assert = require('assert');


function fromWhere(regNumber) {
  if (regNumber.startsWith('CY')) {
    return "Bellville";
    }
    else if (regNumber.startsWith('CJ')) {
      return 'Paarl';
    }
    else if (regNumber.startsWith('CA')) {
      return 'Cape Town';
    }
    else {
      return 'Some other place!';
    }
}


assert.equal(fromWhere('CJ 349 394'), 'Paarl');
assert.equal(fromWhere('CA 483-294'), 'Cape Town');
