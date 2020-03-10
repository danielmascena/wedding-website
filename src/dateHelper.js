/*
 * using the solution on the article:
 * https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
 */
export default targetDate => {
    //var updateClock;
    var clock = document.getElementById('clock-deadline');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var endtime = 'January 25 2030 09:00:00 GMT-0300';
    
    /* for a endpoint to provide the endtime. 
    fetch('https://worldtimeapi.org/api/timezone/America/Fortaleza')
        .then(data => data.json())
        .then(json => { 
            updateClock = function (endtime) {
                return _ => {
                    var t = getTimeRemaining(endtime);
                    daysSpan.innerHTML = t.days;
                    hoursSpan.innerHTML = t.hours;
                    minutesSpan.innerHTML = t.minutes;
                    secondsSpan.innerHTML = t.seconds;
                    
                    if(t.total<=0){
                        clearInterval(timeinterval);
                    }
                }
            }(json.datetime);
              
            updateClock(); // run function once at first to avoid delay
            var timeinterval = setInterval(updateClock,1000);
        })
        .catch(error => console.error(error));
    */

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function updateClock(){
        var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;

        if(t.total<=0){
          clearInterval(timeinterval);
        }
      }
      
      updateClock(); // run function once at first to avoid delay
      var timeinterval = setInterval(updateClock,1000);
};
