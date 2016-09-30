const assert = require('assert');

function weekOrWeekend(day) {
  if (day.startsWith('S')) {
    return 'weekend';
  }
  else {
    return 'week';
  }
}

assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');

console.log(weekOrWeekend('Wednesday'));
