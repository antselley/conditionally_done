function autoAlarm (day) {
  if (day.startsWith('Sat')) {
    console.log("On Saturdays we wake up at 8:00am");
  }
  else if (day.startsWith('Sun')) {
    console.log('On Sundays we wake up at 7:00am');
  }
  else {
    console.log("On weekdays we wake up at 5:00am")
  }
}

autoAlarm('Sunday');
autoAlarm('Saturday');
autoAlarm('Monday');
